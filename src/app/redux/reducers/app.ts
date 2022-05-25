/* eslint-disable @typescript-eslint/default-param-last */
import { AppActions, actionsType } from '../actions/app.actions';
import { AppState } from '../state.models';

export const appNode = 'count';

const initialState: AppState = {
  customCards: [],
  videos: [],
  currentVideo: {},
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


    case actionsType.getVideoById:

      return {
        ...state,
        currentVideo: [...state.videos, ...state.customCards ].filter((x) => x.id === action.payload)[0],
      };

    default:
      return state;
  }
};