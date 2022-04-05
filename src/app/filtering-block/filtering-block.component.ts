import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export class FilteringBlockComponent  {

  constructor() { 
  }

  ngOnInit(): void {
  }


  @Input() sortedDates: string;

  @Output() datesOrder = new EventEmitter<string>();

  changeDateOrder(value: string) {
    switch (value) {
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
    this.datesOrder.emit(value);
    this.viewsOrder.emit('');
  }

  @Input() sortedViews: string;

  @Output() viewsOrder = new EventEmitter<string>();

  changeViewsOrder(value: string) {
    switch (value) {
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
    this.viewsOrder.emit(value);
    this.datesOrder.emit('');
  }


  @Output() searchInput = new EventEmitter<string>();

  filter(e: KeyboardEvent){
    const value = (e.target as HTMLInputElement).value.toLowerCase();
    this.searchInput.emit(value.toLowerCase());
  }

}
