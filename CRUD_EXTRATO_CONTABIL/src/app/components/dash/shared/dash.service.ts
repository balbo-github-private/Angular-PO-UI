import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  getModulos(): Observable<any>{
    const url = "http://172.30.1.205:9213/rest/extratocontabilrazaoCopersucar"
    return this.httpClient.get<any>(`${url}`,)
  }
}
