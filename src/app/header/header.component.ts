import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  isVisible = false;

  isVisibleResults = false;

  searchInput = '';


  constructor() { }

  ngOnInit(): void {
  }

  showFiltering(): void {
    this.isVisible = !this.isVisible;
  }

  showResultsBlock(){
    
    if (this.searchInput.length != 0) {
      this.isVisibleResults = true;
    } else {
      this.isVisibleResults = false;
    }
  }

}
