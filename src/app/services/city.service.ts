import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CityService extends BaseService{

  urlService: string = 'cities';

  constructor(http: HttpClient) {
    super(http);
  }

  public get(id: number): Observable<City> {
    return super.getAction(id);
  }

  public list(): Observable<City[]> {
    return super.listAction();
  }

  public post(body: City): Observable<City> {
    return super.postAction(body);
  }

  public put(body: City): Observable<City> {
    return super.putAction(body);
  }

  public delete(id: number): Observable<any> {
    return super.deleteAction(id);
  }
}
