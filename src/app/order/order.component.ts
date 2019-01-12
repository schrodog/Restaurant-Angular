import { Component, OnInit } from '@angular/core';
import { OrderDisplay } from '../objects';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderNo: number = 15;
  tableNo: string = 'T4';
  fields: string[] = ["Code", "Food Name", "Quantity", "Price"]

  orders: OrderDisplay[] = [];
  totalPrice: number = 0;
  moneyReceived: number = 0;
  change: number = 0;

  delete(order: OrderDisplay){
    
  }


}
