import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent  {

  constructor() { }

  filterIsVisible = false;

  @Output() filtersIsVisible = new EventEmitter<boolean>();

  toggleFilters(): void {
    this.filterIsVisible = !this.filterIsVisible;
    this.filtersIsVisible.emit(this.filterIsVisible);
  }

}
