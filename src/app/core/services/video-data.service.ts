import { Injectable } from '@angular/core';
import { ResponseModel } from '../../youtube/models/response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getVideos } from '../../redux/actions/app.actions';

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
    this.http.get<ResponseModel>('search', { params }).pipe(map((res: ResponseModel) => res.items)).subscribe(data => {
      const array: string[] = [];
      data.map(x => array.push(x.id.videoId));
      const arrayIDs: string = array.join();
      this.getVideoDataById(arrayIDs).pipe(map((res: ResponseModel) => res.items)).subscribe(videos => {
        this.store.dispatch(getVideos({ payload: videos }));
      });
    });
  }

  getVideoDataById(id: string) {
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics');
    return this.http.get<ResponseModel>('videos', { params });
  }
}
