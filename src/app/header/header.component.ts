import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {


  @Output() filtersIsVisible = new EventEmitter<boolean>();

  toggleFilters(isVisible: boolean) {
    this.filtersIsVisible.emit(isVisible);
  }

  isVisible = false;

  isVisibleResults = false;

  searchInput = '';


  constructor() { }


  @Output() resultsIsVisible = new EventEmitter<boolean>();

  showResultsBlock(): void {
    if (this.searchInput.length != 0) {
      this.isVisibleResults = true;
    } else {
      this.isVisibleResults = false;
    }
    this.resultsIsVisible.emit(this.isVisibleResults);
  }
}
