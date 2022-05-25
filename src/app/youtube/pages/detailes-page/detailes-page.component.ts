/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoDataModel, ResponceModel } from '../../models/response';
import { VideoDataService } from '../../../core/services/video-data.service';
import { Store } from '@ngrx/store';
import { getVideoByIdAction } from '../../../redux/actions/app.actions';
import { Observable } from 'rxjs';
import { selectCurrentVideo } from '../../../redux/selectors/app.selectors';



@Component({
  selector: 'app-detailes-page',
  templateUrl: './detailes-page.component.html',
  styleUrls: ['./detailes-page.component.scss'],
})
export class DetailesPageComponent implements OnInit {

  currentID: '';

  video: any;


  constructor(
    private route: ActivatedRoute,
    private dataService: VideoDataService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentID = params['id'];
      this.store.dispatch(new getVideoByIdAction(this.currentID));
      this.store.select((selectCurrentVideo)).subscribe(x =>{
        this.video = x;
        console.log(x);
        
      });
    });
  }

  historyBack() {
    history.back();
  }

}

