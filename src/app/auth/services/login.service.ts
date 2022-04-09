import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(public router: Router) { }

  logIn() {
    localStorage.setItem('logIn', 'fakeToken');
    this.router.navigate(['main']);
  }

  logOut() {
    localStorage.removeItem('logIn');
    this.router.navigate(['auth']);
  }
}
