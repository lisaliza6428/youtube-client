import { Injectable } from '@angular/core';
import { VideoDataModel, ResponceModel } from '../../youtube/models/response';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class VideoDataService {

  key = 'AIzaSyAbttM3s9GTUv0Vg6YFCWx2jeX0-xJO_mQ';

  baseURL = 'https://www.googleapis.com/youtube/v3';

  videos: VideoDataModel[] = [];

  searchInput = '';

  searchInputChange: Subject<string> = new Subject<string>();

  dataChange: Subject<VideoDataModel[]> = new Subject<VideoDataModel[]>();

  constructor(private http: HttpClient) {
    this.searchInputChange.subscribe((value) => {
      this.searchInput = value;
    });
    this.dataChange.subscribe((value) => {
      this.videos = value;
    });
  }

  getVideoData(searchInput: string) {
    this.http.get<ResponceModel>(`${this.baseURL}/search?key=${this.key}&type=video&part=snippet&maxResults=12&q=${searchInput}`).pipe(map((res: ResponceModel) => res.items)).subscribe(data => {
      const array: string[] = [];
      data.map(x => array.push(x.id.videoId));
      const arrayIDs: string = array.join();
      this.getVideoDataById(arrayIDs).pipe(map((res: ResponceModel) => res.items)).subscribe(videos => {
        this.videos = videos; 
        this.dataChange.next(this.videos);
      });
    });
  }

  getVideoDataById(id: string) {
    return this.http.get<ResponceModel>(`${this.baseURL}/videos?key=${this.key}&id=${id}&part=snippet,statistics`);
  }
}
