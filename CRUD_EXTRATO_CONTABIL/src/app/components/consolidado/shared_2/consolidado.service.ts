import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { consolidado } from './consolidado.model';
import { consolidadoServiceModel } from './consolidadoService.model';


@Injectable({
  providedIn: 'root'
})
export class consolidadoService {
  private url = "http://10.80.0.13:9213/rest/copersucar/insertextratoconsolidado"

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  getAll(page:number = 1, filtro:string = ''): Observable<consolidadoServiceModel>{
    //const filter = `?pageSize=20&page=${page}&${filtro}`
    const filter = `${(filtro.replace("-","")).replace("-","").replace("-","").replace("-","")}`
    

   return this.httpClient.get<consolidadoServiceModel>(`${"http://10.80.0.13:9213/rest/extratocontabilconsolidadoCopersucar"}/${filter}`,)

  }

  getById(id:string): Observable<consolidado>{
    //joao return this.httpClient.get<consolidado>(`${this.url}/${id}`)
    return this.httpClient.get<consolidado>(`${"http://10.80.0.13:9213/rest/extratocontabilconsolidadoCopersucar"}`)
  }



  post(formulario: consolidado): Observable<consolidado>{
   return this.httpClient.post<consolidado>(`${"http://10.80.0.13:9213/rest/copersucar/insertextratoconsolidado"}`, [{ID:formulario}], this.httpOptions)

  }



 

}

  
