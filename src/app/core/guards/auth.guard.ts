/* eslint-disable import/named */
import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, public logService: LoginService ) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthorization();
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthorization();
  }

  checkAuthorization() {
    const isAuthorised = this.logService.isLogIn;

    if (isAuthorised){
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }

  }
}