import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { analitico } from './analitico.model';
import { analiticoServiceModel } from './analiticoService.model';


@Injectable({
  providedIn: 'root'
})
export class analiticoService {
  private url = "http://172.30.1.205:9213/rest/copersucar/insertextratoanalitico"

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  getAll(page:number = 1, filtro:string = ''): Observable<analiticoServiceModel>{
    //const filter = `?pageSize=20&page=${page}&${filtro}`
    const filter = `${(filtro.replace("-","")).replace("-","").replace("-","").replace("-","")}`
    

   return this.httpClient.get<analiticoServiceModel>(`${"http://172.30.1.205:9213/rest/extratocontabilanaliticoCopersucar"}/${filter}`,)

  }

  getById(id:string): Observable<analitico>{
    //joao return this.httpClient.get<analitico>(`${this.url}/${id}`)
    return this.httpClient.get<analitico>(`${"http://172.30.1.205:9213/rest/extratocontabilanaliticoCopersucar"}`)
  }



  post(formulario: analitico): Observable<analitico>{
   return this.httpClient.post<analitico>(`${"http://172.30.1.205:9213/rest/copersucar/insertextratoanalitico"}`, [{ID:formulario}], this.httpOptions)

  }



 

}

  
