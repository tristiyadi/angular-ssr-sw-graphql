import { Injectable } from '@angular/core'
import { filter, map } from 'rxjs/operators'
import { MediaGQL, MediaQueryVariables } from 'src/graphql'
import { MediaSearchResult } from '../../models'

@Injectable({ providedIn: 'root' })
export class VideoService {
  constructor(private gql: MediaGQL) {}

  search(variables: MediaQueryVariables) {
    return this.gql.fetch(variables, { fetchPolicy: 'cache-first' }).pipe(
      filter(({ error }) => !error),
      map((result) => {
        const pageInfo = result.data.Page!.pageInfo
        const videos = result.data.Page!.media
        return { videos, pageInfo } as MediaSearchResult
      })
    )
  }
}
