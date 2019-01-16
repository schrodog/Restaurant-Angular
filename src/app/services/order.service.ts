import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Order} from '../objects'
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators'

interface Master_order {
  masterOrderID: number;
  orders: Order[];
}

interface Order_table {
  masterOrderID: number;
  orders: Order[];
  tableNo: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  // fetch current orders in this table
  getOrders(tableNo: string): Observable<Order_table>{
    return this.http.get<Master_order>('api/orders', 
      {params: new HttpParams().set('tableNo', tableNo)} )
      .pipe(
        catchError( err => {throw 'error get orders' } ),
        map(res => {
         return { masterOrderID: res['masterOrderID'], orders: res['orders'], tableNo: tableNo }
        })
      )
  }

  // table turn unavailable, create new masterorder
  createNewMasterOrder(tableNo: string): Observable<Order_table>{
    return this.http.post<number>('api/orders', {}).pipe(
      catchError( err => {throw 'create new order err' } ),
      map(res => {
        return { masterOrderID: res, orders: [], tableNo: tableNo  }
      })
    )
  }

  addNewOrder(orders: Order[], masterOrderID: number){
    return this.http.post<boolean>('api/order', {orders, masterOrderID})
  }

  
}
