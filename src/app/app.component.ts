import { Component } from '@angular/core';
import { Order } from './objects';
import {order_table} from './table-management/table-management.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant';

  currentMasterOrderID: number;
  currentTableNo: string;

  changeTable(res: order_table){
    this.currentMasterOrderID = res.masterOrderID
    this.currentTableNo = res.tableNo
  }
  
}

