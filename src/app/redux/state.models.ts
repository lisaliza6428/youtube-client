import { CustomCardModel } from '../youtube/models/custom-card';
import { VideoDataModel } from '../youtube/models/response';

export interface AppState {
  customCards: CustomCardModel[],
  videos: VideoDataModel[],
}