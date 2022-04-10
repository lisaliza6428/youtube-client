/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { SortService } from '../../../core/services/sort.service';

@Component({
  selector: 'app-results-block',
  templateUrl: './results-block.component.html',
  styleUrls: ['./results-block.component.scss'],
})
export class ResultsBlockComponent implements OnInit  {

  isVisible = false;

  constructor(public sortServ: SortService) {
    this.isVisible = sortServ.resultsIsVisible;
  }

  ngOnInit(){
    this.sortServ.resultsVisibilityChange.subscribe(value => {this.isVisible = value;});
  }
}
