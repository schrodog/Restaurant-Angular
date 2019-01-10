import { Component, OnInit } from '@angular/core';
import {Table} from '../objects'

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.css']
})
export class TableManagementComponent implements OnInit {

  tables: Table[];
  fields: string[] = ["Table No.", "Num Of Seats", "Occupied?"]

  constructor() { }

  ngOnInit() {
  }

}
