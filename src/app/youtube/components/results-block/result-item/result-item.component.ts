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
    public sortServ: SortService,
    public store: Store,
  ) {
    this.sortedDates = sortServ.sDate;
    this.sortedViews = sortServ.sViews;
    this.searchInput = sortServ.filterInput;
    this.search = dataService.searchInput;
  }

  ngOnInit(){
    this.sortServ.sortDatesChange.subscribe(value => {this.sortedDates = value;});
    this.sortServ.sortViewsChange.subscribe(value => {this.sortedViews = value;});
    this.sortServ.filterInputChange.subscribe(value => {this.searchInput = value;});
    this.dataService.searchInputChange.subscribe(value => {this.search = value;});
  }
}