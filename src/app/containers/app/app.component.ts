import { ChangeDetectorRef, Component } from '@angular/core'
import { Observable } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
import { perPage } from 'src/app/const'
import { MediaSearchResult } from 'src/app/models'
import { MediaQueryVariables } from 'src/graphql'
import { AppStateService, VideoService } from '../../services/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoadingBarShown$ = this.appStateService.isHavingAsyncProcess$.pipe(
    debounceTime(0)
  )
  searchText = ''
  private readonly defaultVideoSearchVariable: MediaQueryVariables = {
    page: 1,
    perPage
  }
  videoResult$ = this.searchVideo(this.defaultVideoSearchVariable)

  constructor(
    public videoService: VideoService,
    private appStateService: AppStateService,
    private cdr: ChangeDetectorRef
  ) {}

  onSearchBoxChanges(text: string) {
    this.searchText = text;
    let payload: MediaQueryVariables = {
      ...this.defaultVideoSearchVariable,
    }
    if(this.searchText!="") payload = {...payload, search: text}
    this.videoResult$ = this.searchVideo(payload)
  }

  private searchVideo(
    variables: MediaQueryVariables
  ): Observable<MediaSearchResult> {
    return this.videoService.search(variables)
  }

  onPageNumberChanges(pageNumber: number) {
    let payload: MediaQueryVariables = {
      ...this.defaultVideoSearchVariable,
      page: pageNumber,
    }
    if(this.searchText!="") payload = {...payload, search: this.searchText}
    this.videoResult$ = this.searchVideo(payload)
  }
}
