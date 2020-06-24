import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {interval, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  constructor(private http: HttpClient) {
  }

  private categoryHealthRoute = environment.CATEGORY_HEALTHROUTE;

  public getCategoryHealth() {
    return this.http.get(this.categoryHealthRoute);
  }

}
