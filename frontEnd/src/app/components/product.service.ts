import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { EMPTY, Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  alerta: boolean = false;
   
    constructor(private http: HttpClient) { }


//Ler a lista de produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>("http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/list");

  }

  //Ler um ID que fo passado como parâmetro
  readById(_id:string): Observable<Product> {
    const url = `http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/${_id}`
    return this.http.get<Product>(url)
  }

  //Criar um produto
  create(product: Product): Observable<string> {
    return this.http.post<string>("http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/create", product)
   }


   //Atualizar formulário
  update(product: Product): Observable<string> {
    const url = `http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/${product._id}/update`
    return this.http.put<string>(url,product);
  }
  
  //Deletar o produto
  delete(_id: string): Observable<string> {
        const url =`http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products/${_id}/delete` 
      return this.http.delete<string>(url);
  }

  // //Mostrar mensagem
  // showMensage(msg: string){
  //   if(this.alerta == true){
  //     this.showMensage(msg);
  //   }
  //   else {
  //     alert("Tente novamente!");
  //   }
  // }
     
    
  
  }






