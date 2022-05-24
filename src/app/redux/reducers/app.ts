/* eslint-disable @typescript-eslint/default-param-last */
import { AppActions, actionsType } from '../actions/app.actions';
import { AppState } from '../state.models';

export const appNode = 'count';

const initialState: AppState = {
  count: 0,
  updatedAt: Date.now(),
  customCards: [],
  videos: [],
};

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case actionsType.increase:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionsType.decrease:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionsType.clear:
      return {
        ...state,
        count: 0,
      };
    case actionsType.updatedAt:
      return {
        ...state,
        updatedAt: action.payload.updatedAt,
      };
    case actionsType.createCustomCard:
      return {
        ...state,
        customCards: [
          ...state.customCards, action.payload,
        ],
      };
    case actionsType.getVideos:
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        videos: action.payload,
      };

    default:
      console.log(state);
      return state;
  }
};