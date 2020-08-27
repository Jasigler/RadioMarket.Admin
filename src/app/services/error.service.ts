import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http'
import {throwError, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
   
  public errorHandler(error: HttpErrorResponse): Observable<any> {
		console.log(error.headers);
		return throwError(error);
	}
}
