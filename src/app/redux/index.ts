/* eslint-disable import/named */
import {
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import { appNode, appReducer } from './reducers/app';
import { AppState } from './state.models';


export interface State {
  [appNode]: AppState;
}

export const reducers: any = {
  [appNode]: appReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];