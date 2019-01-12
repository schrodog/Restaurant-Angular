import { Component, OnInit } from '@angular/core';
import {Table} from '../objects'
import {TableService} from '../table.service'

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.css']
})
export class TableManagementComponent implements OnInit {

  tables: Table[];
  fields: string[] = ["Table No.", "Num Of Seats", "Occupied?"]

  constructor(private tableService: TableService) { }

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
    const table: Table = {tableNo: 'T21', numOfSeat: 3, available: false}
    this.tables.push(table)
  }

}
