/* eslint-disable import/named */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, API_URL } from '../../shared/consts';

@Injectable()
export class InterceptorServiceInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request.url);
    let URL = '';
    if (request.url === 'search') {
      URL = '/search?';
    }
    if (request.url === 'videos') {
      URL = '/videos?';
    }
    
    const clone = request.clone({
      url: API_URL + URL,
      params: request.params.append('key', API_KEY),
    });
    return next.handle(clone);

  }
}
