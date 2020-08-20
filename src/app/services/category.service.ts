import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private route = `${environment.CATEGORY_API}/category`;

  public getCategories() : Observable<any> {
    return this.http.get(this.route,)
      .pipe(
        catchError(this.errorHandler),
        retry(3)
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }
}
