import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideoDataModel } from '../../youtube/models/response';
import { CustomCardModel } from '../../youtube/models/custom-card';
import { appNode } from '../reducers/app';
import { AppState } from '../state.models';


export const selectAppFeature = createFeatureSelector<AppState>(appNode);

export const selectCustomCards = createSelector(
  selectAppFeature,
  (state: AppState): CustomCardModel[] => state.customCards,
);

export const selectVideos = createSelector(
  selectAppFeature,
  (state: AppState): VideoDataModel[] => state.videos,
);