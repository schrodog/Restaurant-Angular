import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import {Table} from '../objects'
import {TableService} from '../services/table.service'
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import {DataService} from '../services/data.service'

export interface order_table {
  tableNo: string;
  masterOrderID: number;
}

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.css']
})
export class TableManagementComponent implements OnInit {

  @Output('changeTable') changeTable: EventEmitter<order_table> = new EventEmitter()

  tables: Table[];
  fields: string[] = ["Table No.", "Num Of Seats", "Occupied?"]

  constructor(
    private tableService: TableService,
    private orderService: OrderService,
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.getTables()
  }

  getTables(){
    this.tableService.getTables().subscribe(t => this.tables = t)
  }

  delete(table: Table) {
    this.tables = this.tables.filter(x => x !== table)
  }

  addTable(){
    const table: Table = {tableNo: 'T21', numOfSeat: 3, available: false, masterOrderID: null}
    this.tables.push(table)
  }

  private update(res) {
    this.dataService.changeOrders(res.orders)
    this.changeTable.emit({tableNo: res.tableNo, masterOrderID: res.masterOrderID})
  }

  selectTable(table: Table){
    if (table.available){
      this.orderService.createNewMasterOrder(table.tableNo).subscribe(this.update)
    } else {
      this.orderService.getOrders(table.tableNo).subscribe(this.update)
    }
    this.router.navigateByUrl("/order")
  }

}
