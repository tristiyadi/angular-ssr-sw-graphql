import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { perPage } from 'src/app/const'
import { VideoFragment } from 'src/graphql'

/**
 * For reusable purpose we can create a new GenericList component
 * that accepts items and showPlaceholder @Input,
 * along with custom template
 */
@Component({
  selector: 'app-anime-card-list',
  templateUrl: './anime-card-list.component.html',
  styleUrls: ['./anime-card-list.component.scss'],
})
export class AnimeCardListComponent implements OnInit {
  @Input() items: VideoFragment[] = []
  @Input() showPlaceholder = false

  @Output() selectItem = new EventEmitter<VideoFragment>()

  Array = Array
  perPage = perPage

  constructor() {}

  ngOnInit(): void {}
}
