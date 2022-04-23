import { Injectable } from '@angular/core';
import { VideoDataModel, ResponceModel } from '../../youtube/models/response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {

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
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', '12')
      .set('q', searchInput);
    this.http.get<ResponceModel>('search', { params }).pipe(map((res: ResponceModel) => res.items)).subscribe(data => {
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
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics');
    return this.http.get<ResponceModel>('videos', { params });
  }
}
