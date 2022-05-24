import { VideoDataModel } from '../youtube/models/response';

export interface AppState {
  count: number;
  updatedAt: number;
  customCards: any[],
  videos: VideoDataModel[],
}