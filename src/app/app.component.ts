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

  resIsVisible = false;

  toggleRes(isVisible: boolean) {
    this.resIsVisible = isVisible;
  }
}
