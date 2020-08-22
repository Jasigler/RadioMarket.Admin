import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { CategoryUpdate } from 'src/Models/CategoryUpdate';
import { Category } from 'src/Models/Category';
import { NewCategory } from 'src/Models/NewCategory';

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

  public updateCategory(categoryId: number, updateBody: CategoryUpdate): Promise<any> {
    return this.http.patch(`${this.route}/${categoryId}`, updateBody)
      .toPromise()
      .catch(error => {
        this.errorHandler(error)
      });
  }

  public addCategory(newCategory: NewCategory): Promise<any> {
    return this.http.post(this.route, newCategory)
    .toPromise()
    .catch(error => {
      this.errorHandler(error)
    })
  }

  private errorHandler(error: HttpErrorResponse) {
    console.log(error.headers)
    return throwError(error)
  }
}
