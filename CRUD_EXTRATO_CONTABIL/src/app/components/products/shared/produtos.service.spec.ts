import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './produtos.model';
import { ProdutosServiceModel } from './produtosService.model';
import { PoDialogModule } from '@po-ui/ng-components';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private url = "http://10.80.0.13:9213/rest/extratocontabilrazaoCopersucar"

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {}

  getAll(page:number = 1, filtro:string = ''): Observable<ProdutosServiceModel>{
    const filter = `&${filtro}`
   return this.httpClient.get<ProdutosServiceModel>(`${this.url}/${filter}`,)

  }

  getById(id:string): Observable<Produtos>{
    return this.httpClient.get<Produtos>(`${this.url}/${id}`)
    //return this.httpClient.get<Produtos>(`${this.url}`)
  }

  put(id: string, formulario: Produtos): Observable<Produtos>{
   return this.httpClient.put<Produtos>(`${this.url}/${id}`, JSON.stringify(formulario), this.httpOptions)
    //joao return this.httpClient.put<Produtos>(`${this.url}`, JSON.stringify(formulario), this.httpOptions)
  }

  post(formulario: Produtos): Observable<Produtos>{
   return this.httpClient.post<Produtos>(`${this.url}`, JSON.stringify(formulario), this.httpOptions)

  }

  delete(id: string): Observable<Produtos> {
    return this.httpClient.delete<Produtos>(`${this.url}/${id}`);
    //joao return this.httpClient.delete<Produtos>(`${this.url}`);
  }
}
