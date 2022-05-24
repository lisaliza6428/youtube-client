/* eslint-disable ngrx/prefer-action-creator-in-dispatch */
/* eslint-disable ngrx/use-consistent-global-store-name */
import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectUpdatedAt } from './redux/selectors/app.selectors';
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from './redux/actions/app.actions';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  public count$: Observable<number> = this.store$.select((selectCount));

  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  public updatedAt$: Observable<number> = this.store$.select((selectUpdatedAt));

  constructor(private store$: Store) {
  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
