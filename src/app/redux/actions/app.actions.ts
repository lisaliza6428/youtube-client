/* eslint-disable ngrx/prefer-action-creator */
/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/naming-convention */
import { Action } from '@ngrx/store';
import { VideoDataModel } from '../../youtube/models/response';
import { CustomCardModel } from '../../auth/models/models';

export enum actionsType {
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease',
  clear = '[COUNT] clear',
  updatedAt = '[COUNT] updated at',
  createCustomCard = '[CUSTOM_CARD] createCustomCard',
  getVideos = '[VIDEOS] getVideos',
}

export class CountIncreaseAction implements Action {
  readonly type = actionsType.increase;
}

export class CountDecreaseAction implements Action {
  readonly type = actionsType.decrease;
}

export class CountClearAction implements Action {
  readonly type = actionsType.clear;
}

export class CountUpdatedAtAction implements Action {
  readonly type = actionsType.updatedAt;

  constructor(public payload: {
    updatedAt: number;
  }) {
  }
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

export type AppActions = CountIncreaseAction
| CountDecreaseAction
| CountClearAction
| CountUpdatedAtAction
| createCustomCardAction
| getVideosAction;