import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>('http://localhost:5000/api/category')
      .pipe(catchError(this.handleError<Category[]>('Get Category', [])));
  }

  createCategory(category: Category): Observable<any> {
    return this.httpClient
      .post<Category>('http://localhost:5000/api/category',category,this.httpOptions)
      .pipe(catchError(this.handleError<Category>('Error occured')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
