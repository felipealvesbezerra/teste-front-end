import { Injectable } from '@angular/core';
import { Helper } from '../_helpers/Helper';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Crud } from '../_models/crud.model';
import { retry } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url: string = Helper.Url;

  constructor(private http: HttpClient) { }

  //Create product
  public create(nome: string, marca: string, modelo: string, preco: number, link_foto: string, descricao: string): Observable<Crud> {
    return this.http.post<Crud>(`${this.url}/products/create`, { nome, marca, modelo, preco, link_foto, descricao });
  }

  //List products
  public list(): Observable<Crud> {
    return this.http.get<Crud>(`${this.url}/products/list`).pipe(
      retry(2)
    );
  }

  //Update product
  public update(_id: string, nome: string, marca: string, modelo: string, preco: number, link_foto: string, descricao: string): Observable<Crud> {
    return this.http.put<Crud>(`${this.url}/products/${_id}/update`, { _id, nome, marca, modelo, preco, link_foto, descricao });
  }

  //Delete product
  public delete(_id: string): Observable<Crud> {
    return this.http.delete<Crud>(`/api/products/${_id}/delete`);
  }


}
