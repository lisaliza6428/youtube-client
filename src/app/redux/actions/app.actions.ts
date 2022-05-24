/* eslint-disable import/named */
/* eslint-disable ngrx/prefer-action-creator */
/* eslint-disable @typescript-eslint/naming-convention */
import { Action } from '@ngrx/store';
import { VideoDataModel } from '../../youtube/models/response';
import { CustomCardModel } from '../../auth/models/models';

export enum actionsType {
  createCustomCard = '[CUSTOM_CARD] createCustomCard',
  getVideos = '[VIDEOS] getVideos',
}

export class createCustomCardAction implements Action {
  readonly type = actionsType.createCustomCard;

  constructor(public payload: CustomCardModel) {
  }
}

export class getVideosAction implements Action {
  readonly type = actionsType.getVideos;

  constructor(public payload: VideoDataModel[]) {
  }
}

export type AppActions = createCustomCardAction
| getVideosAction;