import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { actionsType, CountUpdatedAtAction } from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  updatedAt$() {
    return this.actions$.pipe(
      ofType(actionsType.increase, actionsType.decrease, actionsType.clear),
      map(() => {
        return new CountUpdatedAtAction({
          updatedAt: Date.now(),
        });
      }),
    );
  }
}