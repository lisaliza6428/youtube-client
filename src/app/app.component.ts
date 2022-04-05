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

  sortedViews = false;

  changeViewsOrder(value: boolean) {
    this.sortedViews = value;
    console.log(this.sortedViews);
  }

  sortedDates = false;

  changeDatesOrder(value: boolean) {
    this.sortedDates = value;
    console.log(this.sortedDates);
  }

  searchInput = '';

  showsearchInput(searchInput: string) {
    this.searchInput = searchInput;
  }

}
