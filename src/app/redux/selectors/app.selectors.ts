import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomCardModel } from '../../auth/models/models';
import { appNode } from '../reducers/app';
import { AppState } from '../state.models';


export const selectCountFeature = createFeatureSelector<AppState>(appNode);

export const selectCount = createSelector(
  selectCountFeature,
  (state: AppState): number => state.count,
);

export const selectUpdatedAt = createSelector(
  selectCountFeature,
  (state: AppState): number => state.updatedAt,
);

export const selectCustomCards = createSelector(
  selectCountFeature,
  (state: AppState): CustomCardModel[] => state.customCards,
);