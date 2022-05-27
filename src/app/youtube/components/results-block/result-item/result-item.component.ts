/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { VideoDataModel  } from '../../../models/response';
import { VideoDataService } from '../../../../core/services/video-data.service';
import { SortService } from '../../../../core/services/sort.service';


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

  constructor(public dataService: VideoDataService, public sortServ: SortService){
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