import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './produtos.model';
import { ProdutosServiceModel } from './produtosService.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private url = "http://172.30.1.205:9213/rest/copersucar/insertextrato"

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  getAll(page:number = 1, filtro:string = ''): Observable<ProdutosServiceModel>{
    //const filter = `?pageSize=20&page=${page}&${filtro}`
    const filter = `${(filtro.replace("-","")).replace("-","").replace("-","").replace("-","")}`
    

   return this.httpClient.get<ProdutosServiceModel>(`${"http://172.30.1.205:9213/rest/extratocontabilrazaoCopersucar"}/${filter}`,)

  }

  getById(id:string): Observable<Produtos>{
    //joao return this.httpClient.get<Produtos>(`${this.url}/${id}`)
    return this.httpClient.get<Produtos>(`${"http://172.30.1.205:9213/rest/extratocontabilrazaoCopersucar"}`)
  }



  post(formulario: Produtos): Observable<Produtos>{
   return this.httpClient.post<Produtos>(`${"http://172.30.1.205:9213/rest/copersucar/insertextrato"}`, [{ID:formulario}], this.httpOptions)

  }



 

}

  
