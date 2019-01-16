import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Order} from '../objects'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private orderSource: BehaviorSubject<Order[]> = new BehaviorSubject([])
  currentOrders = this.orderSource.asObservable()

  constructor() { }

  changeOrders(orders: Order[]){
    this.orderSource.next(orders)
  }


  
}
