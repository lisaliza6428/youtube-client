
import { createAction, props } from '@ngrx/store';
import { VideoDataModel } from '../../youtube/models/response';
//import { CustomCardModel } from '../../youtube/models/custom-card';

export enum ActionsType {
  createCustomCard = '[CUSTOM_CARD] createCustomCard',
  getVideos = '[VIDEOS] getVideos',
  getVideoById = '[VIDEOS] getVideoById',
}

export const createCustomCard = createAction(
  ActionsType.createCustomCard,
  props<{ payload: any }>(),
);

export const getVideos = createAction(
  ActionsType.getVideos,
  props<{ payload: VideoDataModel[] }>(),
);

export const getVideoById = createAction(
  ActionsType.getVideoById,
  props<{ payload: string }>(),
);