import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { IProduct } from '../dtos/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3333/products';

  constructor(private snackBar: MatSnackBar, private client: HttpClient) { }

  showMessage(message: string, type: 'success' | 'error' = 'success') {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: type === 'success' ? ['msg-success'] : ['msg-error']
    })
  }

  create(product: IProduct): Observable<IProduct> {
    return this.client.post<IProduct>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  } 

  handleError(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', 'error');
    return EMPTY
  }

  read(): Observable<IProduct[]> {
    return this.client.get<IProduct[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }

  readById(id: string): Observable<IProduct> {
    return this.client.get<IProduct>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }
  
  update(product: IProduct): Observable<IProduct> {
    return this.client.put<IProduct>(`${this.baseUrl}/${product.id}`, product).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }

  delete(id: string): Observable<boolean> {
    return this.client.delete<boolean>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }
}
