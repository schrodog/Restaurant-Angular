import { Component, OnInit, Input, Output } from '@angular/core';
import { Order } from '../objects';
import { TableService } from '../services/table.service';
import {OrderService} from '../services/order.service'
import { EventEmitter } from 'events';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // @Input('masterOrderID') masterOrderID: number;
  // @Input('tableNo') tableNo: string;
  @Output('orders') addOrderTable = new EventEmitter<any[]>();

  constructor(
    private orderService: OrderService, 
    private tableService: TableService,
    private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentOrders.subscribe(x => this.orders = x)
  }

  fields: string[] = ["Code", "Food Name", "Quantity", "Price"]
  orders: Order[];

  totalPrice: number = 0;
  moneyReceived: number = 0;
  change: number = 0;

  // addOrders(order: Order, masterOrderID: number){
  //   this.orderService.addNewOrder(order, masterOrderID).subscribe(
  //     () => { this.addOrderTable.emit({order}) }
  //   )
  // }


}
