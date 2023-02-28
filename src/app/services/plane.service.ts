import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plane } from '../model/plane';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PlaneService extends BaseService{

  urlService: string = 'planes';

  constructor(http: HttpClient) {
    super(http);
  }

  public get(id: number): Observable<Plane> {
    return super.getAction(id);
  }

  public list(): Observable<Plane[]> {
    return super.listAction();
  }

  public post(body: Plane): Observable<Plane> {
    return super.postAction(body);
  }

  public put(body: Plane): Observable<Plane> {
    return super.putAction(body);
  }

  public delete(id: number): Observable<any> {
    return super.deleteAction(id);
  }
}
