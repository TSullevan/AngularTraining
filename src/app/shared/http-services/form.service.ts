import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  public sendCreateRequest(route: string, model: any) {
    return this.http.post(environment.baseApiUrl + route, model);
  }

  public sendListRequest<Response>(route: string, query: any) : Observable<Response> {
    return this.http.post<Response>(environment.baseApiUrl + route + '/list', query);
  }

  public sendGetRequest<Response>(route: string, id: number) : Observable<Response> {
    return this.http.get<Response>(environment.baseApiUrl + route + '/' + id);
  }
}
