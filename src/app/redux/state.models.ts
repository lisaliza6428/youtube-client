import { CustomCardModel } from '../youtube/models/custom-card';
import { VideoDataModel } from '../youtube/models/response';

export interface AppState {
  customCards: any,
  videos: VideoDataModel[],
  currentVideo: any,
}