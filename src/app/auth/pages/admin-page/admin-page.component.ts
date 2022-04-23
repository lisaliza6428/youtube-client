/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public fb: FormBuilder) {}

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
        Validators.minLength(3),
        Validators.maxLength(20),
      ]],
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
      console.log('submited!');
    } else {
      console.log('Error!');
    }
    console.log(this.formGroup.value); 
  }
}
