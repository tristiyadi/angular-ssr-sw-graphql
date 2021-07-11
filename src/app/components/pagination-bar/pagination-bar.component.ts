import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { paginationButtonCount } from 'src/app/const'
import { PageInfo } from 'src/graphql'

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss'],
})
export class PaginationBarComponent implements OnInit {
  @Input() pageInfo: PageInfo = {}

  @Output() currentPageChanges = new EventEmitter<number>()

  readonly pageArray = Array(paginationButtonCount * 2 + 1)
    .fill(0)
    .map((_, index) => index - paginationButtonCount)

  constructor() {}

  ngOnInit(): void {}
}
