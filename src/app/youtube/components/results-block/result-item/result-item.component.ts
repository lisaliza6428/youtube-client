/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { VideoDataModel  } from '../../../models/response';
import { VideoDataService } from '../../../../core/services/video-data.service';
import { SortService } from '../../../../core/services/sort.service';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
  providers: [VideoDataService],
})

export class ResultItemComponent implements OnInit {

  sortedViews = '';

  sortedDates = '';

  searchInput = '';

  videos: VideoDataModel[];

  constructor(private dataService: VideoDataService, public sortServ: SortService){
    this.sortedDates = sortServ.sDate;
    this.sortedViews = sortServ.sViews;
    this.searchInput = sortServ.filterInput;
  }

  ngOnInit(){
    this.videos = this.dataService.getVideoData();
    this.sortServ.sortDatesChange.subscribe(value => {this.sortedDates = value;});
    this.sortServ.sortViewsChange.subscribe(value => {this.sortedViews = value;});
    this.sortServ.filterInputChange.subscribe(value => {this.searchInput = value;});
  }
}