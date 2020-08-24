import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  constructor(private http: HttpClient) {
  }

  private routes ={
    category: environment.CATEGORY_HEALTHROUTE,
    item: environment.ITEM_HEALTHROUTE,
    image: environment.IMAGE_HEALTHROUTE,
    user: environment.USER_HEALTHROUTE
  }


  public getCategoryHealth(): Observable<string> {

    return this.http.get(this.routes.category, {responseType: 'text'})
      .pipe(
        catchError(this.errorHandler),
        retry(3)
      )
  }

  public getItemHealth(): Observable<string> {
    return this.http.get(this.routes.item, {responseType: 'text'}) 
    .pipe(
      catchError(this.errorHandler),
      retry(3)
    )
  }

  public getImageHealth(): Observable<any> {
    return this.http.get(this.routes.image)
      .pipe(
        catchError(this.errorHandler),
        retry(3)
      )
  }

  public getUserHealth(): Observable<string> {
    return this.http.get(this.routes.user, {responseType: 'text'})
    .pipe(
      catchError(this.errorHandler),
      retry(3)
    )
  }

  private errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }

}
