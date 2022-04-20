/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoDataModel, ResponceModel } from '../../models/response';
import { VideoDataService } from '../../../core/services/video-data.service';

@Component({
  selector: 'app-detailes-page',
  templateUrl: './detailes-page.component.html',
  styleUrls: ['./detailes-page.component.scss'],
})
export class DetailesPageComponent implements OnInit {

  currentID: '';

  video: VideoDataModel;

  constructor(private route: ActivatedRoute, private dataService: VideoDataService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentID = params['id'];
      this.getVideo(this.currentID);
    });
  }

  historyBack() {
    history.back();
  }

  getVideo(id: string) {
    this.dataService.getVideoDataById(id)
      .subscribe((video: ResponceModel) => {
        this.video = video.items[0];
        console.log(video.items[0]);
      });
  }
}

