import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Erreur401Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*return next.handle(request).pipe{
      erreur => {
        if(erreur instanceof HttpErrorResponse && erreur.status == 401){
          this.u.deconnexion();
        }
        return erreur;
      }
    };*/
    return next.handle(request);
  }
}
