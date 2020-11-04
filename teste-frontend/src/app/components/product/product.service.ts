import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://ec2-52-203-6-72.compute-1.amazonaws.com:8000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-fail'] : ['msg-success'],
    });
  }

  create(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/create`;
    return this.http
      .post<Product>(url, product, { responseType: 'text' as 'json' })
      .pipe(
        map((object) => object),
        catchError((error) => this.handleError(error))
      );
  }

  read(): Observable<Product[]> {
    const url = `${this.baseUrl}/list`;
    return this.http.get<Product[]>(url).pipe(
      map((object) => object),
      catchError((error) => this.handleError(error))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((object) => object),
      catchError((error) => this.handleError(error))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product._id}/update`;
    return this.http
      .put<Product>(url, product, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((object) => object),
        catchError((error) => this.handleError(error))
      );
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}/delete`;
    return this.http
      .delete<Product>(url, { responseType: 'text' as 'json' })
      .pipe(
        map((object) => object),
        catchError((error) => this.handleError(error))
      );
  }

  handleError(error: any): Observable<any> {
    console.log(error)
    this.showMessage('Ocorreu algum erro inesperado!', true);
    return EMPTY;
  }
}
