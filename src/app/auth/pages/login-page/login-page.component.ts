/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateUpperCase, validateLowerCase, validateNumbers, validateSpecial } from './validators';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public fb: FormBuilder, public loginService: LoginService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        validateUpperCase,
        validateLowerCase,
        validateNumbers,
        validateSpecial,
        Validators.minLength(8),
      ]],
    });
  }

  get _login() {
    return this.formGroup.controls['login'];
  }

  get _password() {
    return this.formGroup.controls['password'];
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID') {
      this.loginService.logIn();
    }
  }
}
