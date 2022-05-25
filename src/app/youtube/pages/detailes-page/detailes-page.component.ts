/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoDataModel } from '../../models/response';
import { VideoDataService } from '../../../core/services/video-data.service';
import { Store } from '@ngrx/store';
import { getVideoById } from '../../../redux/actions/app.actions';
import { Observable } from 'rxjs';
import { selectCurrentVideo } from '../../../redux/selectors/app.selectors';

@Component({
  selector: 'app-detailes-page',
  templateUrl: './detailes-page.component.html',
  styleUrls: ['./detailes-page.component.scss'],
})
export class DetailesPageComponent implements OnInit {

  currentID: '';

  public video: Observable<VideoDataModel> = this.store.select((selectCurrentVideo));

  constructor(
    private route: ActivatedRoute,
    private dataService: VideoDataService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentID = params['id'];
      this.store.dispatch(getVideoById({ payload: this.currentID }));
    });
  }

  historyBack() {
    history.back();
  }

}

