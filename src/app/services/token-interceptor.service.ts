import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


import {AuthService} from './auth.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor  {




  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.token)
    {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.token}`
        }
      });
    }
    return next.handle(request);
  }

}
