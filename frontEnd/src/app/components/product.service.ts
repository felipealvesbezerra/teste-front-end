import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { EMPTY, Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    baseUrl = "http://localhost:3003/products";


  constructor(private http: HttpClient) { }



//Ler a lista de produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);

  }

  //Ler um ID que fo passado como parâmetro
  readById(id:string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  //Criar um produto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
   }


   //Atualizar formulário
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url,product)
  }
  

  //Deletar o produto
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url);
  }

     
    
  
  }






