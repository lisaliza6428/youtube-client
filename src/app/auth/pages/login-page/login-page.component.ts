/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public fb: FormBuilder, public loginService: LoginService) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[!?@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/), Validators.minLength(8)]],
    });

  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID'){
      console.log('submited!');
      console.log(this.formGroup.value);
      this.loginService.logIn();
    } else {
      console.log('Error!');
    }
  }

}
