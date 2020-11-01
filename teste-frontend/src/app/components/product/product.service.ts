import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  read(): Observable<Product[]>{
    const url = `${this.baseUrl}/list`;
    return this.http.get<Product[]>(url);
  }


  create(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/create`;
    return this.http.post<Product>(url, product, {responseType: 'text' as 'json'});
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product._id}/update`;
    return this.http.put<Product>(url, product, {responseType: 'text' as 'json'});
  }

  delete(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}/delete`;
    return this.http.delete<Product>(url, {responseType: 'text' as 'json'});
  }

}
