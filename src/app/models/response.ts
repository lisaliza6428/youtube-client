export interface IResponse {
  kind: string,
  etag: string,
  pageInfo: IPageInfo,
  items: IVideoData[] 
}
export interface IVideoData {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: IThumbnails,
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage?: string,
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage?: string,
  },
  statistics: IStatistics,
}
export interface IPageInfo {
  totalResults: number,
  resultsPerPage: number,
}

export interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}

export interface IThumbnails {
  default: {
    url: string,
    width: number,
    height: number,
  },
  medium: {
    url: string,
    width: number,
    height: number,
  },
  high: {
    url: string,
    width: number,
    height: number,
  },
  standard: {
    url: string,
    width: number,
    height: number,
  },
  maxres: {
    url: string,
    width: number,
    height: number,
  },
}
