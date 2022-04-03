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

  ngOnInit(): void {
  }
  /*   showResultsBlock(){
    if (this.searchInput.length != 0) {
      this.isVisibleResults = true;
    } else {
      this.isVisibleResults = false;
    }
  } */ 
  
  @Output() resIsVisible = new EventEmitter<boolean>();

  showResultsBlock(): void {
    if (this.searchInput.length != 0) {
      this.isVisibleResults = true;
    } else {
      this.isVisibleResults = false;
    }
    console.log(this.isVisibleResults);
    this.resIsVisible.emit(this.isVisibleResults);
  }
}
