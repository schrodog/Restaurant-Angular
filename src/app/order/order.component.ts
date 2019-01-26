import { Component, OnInit, Input, Output } from '@angular/core';
import { Order } from '../objects';
import { TableService } from '../services/table.service';
import {OrderService} from '../services/order.service'
// import { EventEmitter } from 'events';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() currentMasterOrderID: number;
  @Input() currentTableNo: string;

  constructor(
    private orderService: OrderService, 
    // private tableService: TableService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.currentOrders.subscribe(x => this.setOrders(x))
  }


  fields: string[] = ["Code", "Food Name", "Quantity", "Price"]
  orders: Order[];

  totalPrice: number = 0;
  moneyReceived: number = 0;
  change: number = 0;
  checkOutMode: boolean = false;
  
  setOrders(inp: Order[]) {
    this.totalPrice = inp.map(x => x.price).reduce( (a,b) => a + b ,0)
    this.orders = inp
  }

  confirmOrders(){
    this.checkOutMode = true
  }

  checkOut(){
    this.orderService.checkOut(this.currentMasterOrderID).subscribe(
      () => { this.router.navigateByUrl("/table") },
      err => {}
    )    
  }

  // addOrders(order: Order, masterOrderID: number){
  //   this.orderService.addNewOrder(order, masterOrderID).subscribe(
  //     () => { this.addOrderTable.emit({order}) }
  //   )
  // }


}
