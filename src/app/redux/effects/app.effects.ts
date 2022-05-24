import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions) {}

  @Effect()
  doSmth() {
    return this.actions.pipe(
      ofType(),
      map(() => {
      }),
    );
  }
}