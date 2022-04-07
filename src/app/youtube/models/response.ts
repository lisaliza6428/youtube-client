export interface ResponceModel {
  kind: string,
  etag: string,
  pageInfo: PageInfoModel,
  items: VideoDataModel[] 
}
export interface VideoDataModel {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: ThumbnailsModel,
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
  statistics: StatisticsModel,
}
export interface PageInfoModel {
  totalResults: number,
  resultsPerPage: number,
}

export interface StatisticsModel {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}

export interface ThumbnailsModel {
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
