import { Component } from '@angular/core';
import { IVideoData, videoData } from '../../../app/models/response';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {

  videos: IVideoData[] = videoData;

  constructor() {
  }

  ngOnInit(): void {
  }




}



