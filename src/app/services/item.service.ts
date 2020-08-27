import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {environment } from '../../environments/environment'
import { Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  private route =  `${environment.ITEM_API}/item`

  public getCount() : Observable<any> {
    return this.http.get(`${this.route}/count`)
      .pipe (
        catchError(this.errorHandler),
        retry(3)
      )
  } 

  private errorHandler(error: HttpErrorResponse) {
		console.log(error.headers);
		return throwError(error);
	}
  
}
