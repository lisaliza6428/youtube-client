/* eslint-disable ngrx/prefer-action-creator-in-dispatch */
import { Injectable } from '@angular/core';
import { ResponceModel } from '../../youtube/models/response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getVideosAction } from '../../redux/actions/app.actions';



@Injectable({
  providedIn: 'root',
})
export class VideoDataService {

  searchInput = '';

  searchInputChange: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {
    this.searchInputChange.subscribe((value) => {
      this.searchInput = value;
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
        this.store.dispatch(new getVideosAction(videos));
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
