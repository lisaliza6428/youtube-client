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

  videos: VideoDataModel[] = [];

  heroes: VideoDataModel[];

  constructor(private dataService: VideoDataService, public sortServ: SortService){
    this.sortedDates = sortServ.sDate;
    this.sortedViews = sortServ.sViews;
    this.searchInput = sortServ.filterInput;

  }

  ngOnInit(){
    this.getVideoData();
    this.sortServ.sortDatesChange.subscribe(value => {this.sortedDates = value;});
    this.sortServ.sortViewsChange.subscribe(value => {this.sortedViews = value;});
    this.sortServ.filterInputChange.subscribe(value => {this.searchInput = value;});
  }

  getVideoData(){
    this.dataService.getVideoData()
      .subscribe(videos => {
        this.videos = videos;
        console.log(this.videos);
      });
  }
}