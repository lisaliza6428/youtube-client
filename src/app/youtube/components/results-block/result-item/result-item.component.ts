/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { VideoDataModel  } from '../../../models/response';
import { VideoDataService } from '../../../../core/services/video-data.service';
import { SortService } from '../../../../core/services/sort.service';
import { CustomCardModel } from '../../../../auth/models/models';
import { Store } from '@ngrx/store';
import { selectCustomCards } from '../../../../redux/selectors/app.selectors';
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

  videos: VideoDataModel[] = [];

  public customCards: Observable<CustomCardModel[]> = this.store.select((selectCustomCards));

  constructor(
    public dataService: VideoDataService,
    public sortServ: SortService,
    public store: Store,
  ) {
    this.sortedDates = sortServ.sDate;
    this.sortedViews = sortServ.sViews;
    this.searchInput = sortServ.filterInput;
    this.search = dataService.searchInput;
    this.videos = dataService.videos;
  }

  ngOnInit(){
    this.sortServ.sortDatesChange.subscribe(value => {this.sortedDates = value;});
    this.sortServ.sortViewsChange.subscribe(value => {this.sortedViews = value;});
    this.sortServ.filterInputChange.subscribe(value => {this.searchInput = value;});
    this.dataService.searchInputChange.subscribe(value => {this.search = value;});
    this.dataService.dataChange.subscribe(videos => {
      this.videos = videos;
    });
  }
}