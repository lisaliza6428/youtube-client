/* eslint-disable @typescript-eslint/default-param-last */
import { AppActions, actionsType } from '../actions/app.actions';
import { AppState } from '../state.models';

export const appNode = 'count';

const initialState: AppState = {
  customCards: [],
  videos: [],
};

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    
    case actionsType.createCustomCard:
      return {
        ...state,
        customCards: [
          ...state.customCards, action.payload,
        ],
      };

    case actionsType.getVideos:
      return {
        ...state,
        videos: action.payload,
      };

    default:
      return state;
  }
};