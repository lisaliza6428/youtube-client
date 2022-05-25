import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  isLogIn = false;

  isLogInChange: Subject<boolean> = new Subject<boolean>();

  constructor(public router: Router) {
    this.isLogInChange.subscribe((value) => {
      this.isLogIn = value;
    });
    let a = localStorage.getItem('logIn');
    if (a) {
      this.isLogIn = true;
    } else {
      this.isLogIn = false;
    }
  }

  logIn() {
    localStorage.setItem('logIn', 'fakeToken');
    this.isLogIn = true;
    this.isLogInChange.next(true);
    this.router.navigate(['main']);
  }

  logOut() {
    localStorage.removeItem('logIn');
    this.router.navigate(['auth']);
    this.isLogIn = false;
    this.isLogInChange.next(false);
  }
}
