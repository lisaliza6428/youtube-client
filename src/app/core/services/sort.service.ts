import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SortService {

  sDate = '';

  sViews = '';

  filterInput = '';

  sortDatesChange: Subject<string> = new Subject<string>();

  sortViewsChange: Subject<string> = new Subject<string>();

  filterInputChange: Subject<string> = new Subject<string>();

  constructor()  {
    this.sortDatesChange.subscribe((value) => {
      this.sDate = value;
    });
    this.sortViewsChange.subscribe((value) => {
      this.sViews = value;
    });
    this.filterInputChange.subscribe((value) => {
      this.filterInput = value;
    });
  }

  toggleSortDates() {
    let value = '';
    switch (this.sDate) {
      case '':
        value = 'asc';
        break;
      case 'asc':
        value = 'desc';
        break;
      case 'desc':
        value = 'asc';
        break;
    }
    this.sortDatesChange.next(value);
    this.sortViewsChange.next('');
  }

  toggleSortViews() {
    let value = '';
    switch (this.sViews) {
      case '':
        value = 'asc';
        break;
      case 'asc':
        value = 'desc';
        break;
      case 'desc':
        value = 'asc';
        break;
    }
    this.sortViewsChange.next(value);
    this.sortDatesChange.next('');
  }

  checkFilterInput(value: string) {
    this.filterInputChange.next(value);
  }
}
