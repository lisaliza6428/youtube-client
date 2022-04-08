import { Injectable } from '@angular/core';
import  json  from '../../youtube/models/data.json';
import { VideoDataModel  } from '../../youtube/models/response';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {

  videoData: VideoDataModel[];

  constructor() {
    this.videoData = json.items;
    console.log(this.getVideoDataById('YN8zNnV0sK8'));
  }

  getVideoData() :VideoDataModel[]{
    return this.videoData;
  }

  getVideoDataById(id: string) {
    return this.videoData.filter(video => video.id === id)[0];
  }
}
