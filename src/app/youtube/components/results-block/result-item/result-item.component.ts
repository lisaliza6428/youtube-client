/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { VideoDataModel  } from '../../../models/response';
import { VideoDataService } from '../../../../core/services/video-data.service';
import { SortService } from '../../../../core/services/sort.service';
import { Store } from '@ngrx/store';
import { selectIntegrated } from '../../../../redux/selectors/app.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})

export class ResultItemComponent implements OnInit {

  sortedViews = '';

  sortedDates = '';

  searchInput = '';

  search = '';

  public videos: Observable<VideoDataModel[]> = this.store.select((selectIntegrated));

  constructor(
    public dataService: VideoDataService,
    public sortService: SortService,
    public store: Store,
  ) {
    this.sortedDates = sortService.sDate;
    this.sortedViews = sortService.sViews;
    this.searchInput = sortService.filterInput;
    this.search = dataService.searchInput;
  }

  ngOnInit(){
    this.sortService.sortDatesChange.subscribe(value => {this.sortedDates = value;});
    this.sortService.sortViewsChange.subscribe(value => {this.sortedViews = value;});
    this.sortService.filterInputChange.subscribe(value => {this.searchInput = value;});
    this.dataService.searchInputChange.subscribe(value => {this.search = value;});
  }
}