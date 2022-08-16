/* eslint-disable @typescript-eslint/default-param-last */
import { ActionsType } from '../actions/app.actions';
import { AppState } from '../state.models';

export const appNode = 'count';

const initialState: AppState = {
  customCards: [],
  videos: [],
  currentVideo: {},
};

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    
    case ActionsType.createCustomCard:
      return {
        ...state,
        customCards: [
          ...state.customCards, action.payload,
        ],
      };
    case ActionsType.getVideos:

      return {
        ...state,
        videos: action.payload,
      };


    case ActionsType.getVideoById:

      return {
        ...state,
        currentVideo: [...state.videos, ...state.customCards ].filter((x) => x.id === action.payload)[0],
      };

    default:
      return state;
  }
};