import { CustomCardModel } from '../auth/models/models';
import { VideoDataModel } from '../youtube/models/response';

export interface AppState {
  customCards: CustomCardModel[],
  videos: VideoDataModel[],
}