import { Injectable } from '@angular/core';
import {Food, MiniOrder} from '../objects'
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoods(): Observable<Food[]>{
    return this.http.get<Food[]>('api/foods').pipe(
      catchError(err => {throw 'err get food'})
    )
  }

  addOrders(miniOrder: MiniOrder[], masterID: number): Observable<boolean>{
    return this.http.post<boolean>('api/food', 
      {miniOrder: miniOrder, masterOrderID: masterID}).pipe(
        catchError(err => {throw 'err submitting mini orders'})
      )
  }
  
  
}
