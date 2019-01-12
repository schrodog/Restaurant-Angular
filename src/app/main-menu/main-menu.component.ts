import { Component, OnInit } from '@angular/core';
import {Role} from '../objects'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  role: Role = Role.Waiter;

  
}
