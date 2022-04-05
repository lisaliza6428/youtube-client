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

  sortedDates = false;

  changeDatesOrder(value: boolean) {
    this.sortedDates = value;
    console.log(this.sortedDates);
  }

  sortedViews = false;

  changeViewsOrder(value: boolean) {
    this.sortedViews = value;
    console.log(this.sortedViews);
  }


  searchInput = '';

  showsearchInput(searchInput: string) {
    this.searchInput = searchInput;
  }

}
