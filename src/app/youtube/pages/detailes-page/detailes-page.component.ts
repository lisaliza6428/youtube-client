/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoDataModel } from '../../models/response';
import { VideoDataService } from '../../../core/services/video-data.service';

@Component({
  selector: 'app-detailes-page',
  templateUrl: './detailes-page.component.html',
  styleUrls: ['./detailes-page.component.scss'],
})
export class DetailesPageComponent implements OnInit {

  currentID: '';
  
  currentVideo: VideoDataModel;

  constructor(private route: ActivatedRoute, private dataService: VideoDataService){ }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.currentID = params['id'];
      console.log(this.currentID);
      this.currentVideo = this.dataService.getVideoDataById(this.currentID);
    });

  }

}
