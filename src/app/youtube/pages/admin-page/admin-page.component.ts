
/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createCustomCard } from '../../../redux/actions/app.actions';
// import { VideoDataModel } from '../../models/response';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]],
      description: ['', [
        Validators.maxLength(255),
      ]],
      linkImage: ['', [
        Validators.required,
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
      ]],
      linkVideo: ['', [
        Validators.required,
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
      ]],
      date: ['', [
        Validators.required,
      ]],
      id: [''],
    });
  }

  get _title(){
    return this.formGroup.controls['title'];
  }

  get _description(){
    return this.formGroup.controls['description'];
  }

  get _linkImage(){
    return this.formGroup.controls['linkImage'];
  }

  get _linkVideo(){
    return this.formGroup.controls['linkVideo'];
  }

  get _date(){
    return this.formGroup.controls['date'];
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID'){
      const dateString = this.formGroup.controls['date'].value;
      this._date.setValue(new Date(dateString).toISOString());
      this.formGroup.controls['id'].setValue(Date.now().toString());
      const card = this.getNewCard(this.formGroup.value);
      this.store.dispatch(createCustomCard({ payload: card }));
      this.router.navigate(['/main']);
    }
  }

  getNewCard(data: any){
    return {
      id: new Date(data.date).getTime().toString(),
      snippet: {
        title: `${data.title}`,
        publishedAt: data.date,
        description: `${data.description}`,
        thumbnails: {
          high: {
            url: data.linkImage,
            width: 480,
            height: 360,
          },
        },
      },
      statistics: {
        viewCount: '0',
        likeCount: '0',
        dislikeCount: '0',
        commentCount: '0',
        favoriteCount: '0',
      },
    };

  }


}