import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FlightsService extends BaseService{

  urlService: string = 'flights';

  constructor(http: HttpClient) {
    super(http);
  }

  public get(id: number): Observable<Flight> {
    return super.getAction(id);
  }

  public list(): Observable<Flight[]> {
    return super.listAction();
  }

  public post(body: Flight): Observable<Flight> {
    return super.postAction(body);
  }

  public put(body: Flight): Observable<Flight> {
    return super.putAction(body);
  }

  public delete(id: number): Observable<any> {
    return super.deleteAction(id);
  }
}
