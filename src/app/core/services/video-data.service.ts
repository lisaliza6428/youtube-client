import { Injectable } from '@angular/core';
import { VideoDataModel, ResponceModel  } from '../../youtube/models/response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class VideoDataService {

  videoData: VideoDataModel[] = [];

  constructor(private http: HttpClient) { }


  key = 'AIzaSyBiOrxNjJSg051IC_YWU188CXhzd720M80';

  baseURL = 'https://www.googleapis.com/youtube/v3';

 
  getVideoData(): Observable<VideoDataModel[]> {
    return this.http.get<ResponceModel>(`${this.baseURL}/search?key=${this.key}&type=video&part=snippet&maxResults=12&q=js`).pipe(map((res: ResponceModel)  => res.items));
  }

  getVideoDataById(id: string) {
    return this.http.get<ResponceModel>(`${this.baseURL}/videos?key=${this.key}&id=${id}&part=snippet,statistics`);
  }
}
