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

  private categoryHealthRoute = environment.CATEGORY_HEALTHROUTE;

  public getCategoryHealth(): Observable<string> {

    return this.http.get(this.categoryHealthRoute, {responseType: 'text'})
      .pipe(
        catchError(this.errorHandler),
        retry(3)
      );
  }


  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }

}
