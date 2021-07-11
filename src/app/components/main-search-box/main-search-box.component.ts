import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { Subject } from 'rxjs'
import { debounceTime, takeUntil } from 'rxjs/operators'
import { textDebounceDuration } from 'src/app/const'

@Component({
  selector: 'app-main-search-box',
  templateUrl: './main-search-box.component.html',
  styleUrls: ['./main-search-box.component.scss'],
})
export class MainSearchBoxComponent implements OnInit, OnDestroy {
  @Output() userTyping = new EventEmitter<string>()

  textControl = new FormControl()

  onDestroy$ = new Subject<void>()

  constructor() {
    this.listenToUserTyping()
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }

  listenToUserTyping() {
    this.textControl.valueChanges
      .pipe(debounceTime(textDebounceDuration), takeUntil(this.onDestroy$))
      .subscribe((text: string) => {
        this.userTyping.next(text)
      })
  }
}
