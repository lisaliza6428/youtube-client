/* eslint-disable import/named */
/* eslint-disable ngrx/prefer-action-creator */
/* eslint-disable @typescript-eslint/naming-convention */
import { Action } from '@ngrx/store';
import { VideoDataModel } from '../../youtube/models/response';
//import { CustomCardModel } from '../../youtube/models/custom-card';

export enum actionsType {
  createCustomCard = '[CUSTOM_CARD] createCustomCard',
  getVideos = '[VIDEOS] getVideos',
  getVideoById = '[VIDEOS] getVideoById',
}

export class createCustomCardAction implements Action {
  readonly type = actionsType.createCustomCard;

  constructor(public payload: any) {
  }
}

export class getVideosAction implements Action {
  readonly type = actionsType.getVideos;

  constructor(public payload: VideoDataModel[]) {
  }
}

export class getVideoByIdAction implements Action {
  readonly type = actionsType.getVideoById;

  constructor(public payload: any) {
  }
}

export type AppActions = createCustomCardAction
| getVideosAction | getVideoByIdAction;