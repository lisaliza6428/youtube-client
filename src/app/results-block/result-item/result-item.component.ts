import { Component } from '@angular/core';
import { IVideoData, videoData } from '../../../app/models/response';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {

  videos: IVideoData[] = videoData;

  sortdate = true;

  sortView = true;


  constructor() {
  }

  ngOnInit(): void {
  }


  sortDate() {
    this.sortdate = !this.sortdate;
    if (this.sortdate){
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +new Date(a.snippet.publishedAt).getTime() - +new Date(b.snippet.publishedAt).getTime()).sort();
    } else {
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +new Date(b.snippet.publishedAt).getTime() - +new Date(a.snippet.publishedAt).getTime()).sort();
    }
  }

  sortViewsCount() {
    this.sortView = !this.sortView;
    if (this.sortView) {
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +a.statistics.viewCount - +b.statistics.viewCount);
    } else {
      this.videos = this.videos.sort((a: IVideoData, b: IVideoData) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
  }
}



