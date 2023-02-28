import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class BaseService {

  abstract urlService: string;

  constructor(private http: HttpClient) {
  }

  protected getAction<TResult, TKey>(id: TKey): Observable<TResult> {
    let url = this.buildUrl() + '/' + id;
    return this.http.get<TResult>(url);
  }

  protected listAction<TResult>(): Observable<TResult> {
    let url = this.buildUrl();
    return this.http.get<TResult>(url);
  }

  protected postAction<TResult>(body: TResult): Observable<TResult> {
    let url = this.buildUrl();
    return this.http.post<TResult>(url, body);
  }

  protected putAction<TResult>(body: TResult): Observable<TResult> {
    let url = this.buildUrl();
    return this.http.put<TResult>(url, body);
  }

  protected deleteAction<TKey>(id: TKey): Observable<any> {
    let url = this.buildUrl() + '/' + id;
    return this.http.delete(url);
  }

  protected buildUrl(): string {
    return environment.rooServiceUrl + '/' + this.urlService;
  }
}
