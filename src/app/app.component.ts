import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  filtersIsVisible = false;

  toggleFilters(isVisible: boolean) {
    this.filtersIsVisible = isVisible;
  }

  resultsIsVisible = false;

  toggleRes(isVisible: boolean) {
    this.resultsIsVisible = isVisible;
  }

  sortedDates = '';

  changeDatesOrder(value: string) {
    this.sortedDates = value;
  }

  sortedViews = '';

  changeViewsOrder(value: string) {
    this.sortedViews = value;
  }


  searchInput = '';

  showsearchInput(searchInput: string) {
    this.searchInput = searchInput;
  }

}
