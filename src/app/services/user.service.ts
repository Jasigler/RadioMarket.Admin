import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'
import {catchError, retry} from 'rxjs/operators';
@Injectable({
	providedIn: 'root',
})
export class UserService {
	private route = `${environment.USER_API}`;
	constructor(private http: HttpClient) {}

	public getUserCount(): Observable<object> {
    return this.http.get(`${this.route}/user/count`)
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
