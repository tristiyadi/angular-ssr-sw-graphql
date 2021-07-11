import { PageInfo, VideoFragment } from '../../graphql'

export interface MediaSearchResult {
  videos: VideoFragment[]
  pageInfo: PageInfo
}
