/* eslint-disable import/named */
import { Component, Input, OnInit } from '@angular/core';
import { VideoDataModel  } from '../../../models/response';
import { VideoDataService } from '../../../../core/services/video-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
  providers: [VideoDataService],

})
export class ResultItemComponent implements OnInit {
  @Input() sortedViews: string;

  @Input() sortedDates: string;

  @Input() searchInput: string;

  videos: VideoDataModel[];

  constructor(private dataService: VideoDataService){
  }

  ngOnInit(){
    this.videos = this.dataService.getVideoData();

  }
}