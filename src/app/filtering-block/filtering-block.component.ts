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

  @Input() sortedViews: boolean;

  @Output() viewsOrder = new EventEmitter<boolean>();

  changeViewsOrder(value: boolean) {
    value = !value;
    this.viewsOrder.emit(value);
  }


  @Input() sortedDates: boolean;

  @Output() datesOrder = new EventEmitter<boolean>();

  changeDateOrder(value: boolean) {
    value = !value;
    this.datesOrder.emit(value);
  }


  @Output() searchInput = new EventEmitter<string>();

  filter(e: KeyboardEvent){
    const value = (e.target as HTMLInputElement).value.toLowerCase();
    this.searchInput.emit(value.toLowerCase());
  }

}
