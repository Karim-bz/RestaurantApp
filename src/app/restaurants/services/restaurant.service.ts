import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getRestaurants(id): Observable<Restaurant[]> {
    return this.httpClient
      .get<Restaurant[]>(
        'http://localhost:5000/api/restaurantsByCategory/' + id
      )
      .pipe(catchError(this.handleError<Restaurant[]>('Get Restaurant', [])));
  }

  getRestaurantById(id): Observable<Restaurant[]> {
    return this.httpClient
      .get<Restaurant[]>('http://localhost:5000/api/restaurants/' + id)
      .pipe(catchError(this.handleError<Restaurant[]>('Get Restaurant', [])));
  }

  createRestaurant(id, restaurant: Restaurant): Observable<any> {
    return this.httpClient
      .post<Restaurant>('http://localhost:5000/api/category/' + id + '/restaurants',restaurant,this.httpOptions)
      .pipe(catchError(this.handleError<Restaurant[]>('Get Restaurant', [])));
  }

  deleteRestaurant(id): Observable<Restaurant[]> {
    return this.httpClient
      .delete<Restaurant[]>('http://localhost:5000/api/restaurants/' + id, this.httpOptions )
      .pipe(catchError(this.handleError<Restaurant[]>('Delete user')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
