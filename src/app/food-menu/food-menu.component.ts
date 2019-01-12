import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tableNo: string;
  foodTypes: string[] = ["Dessert", "Drinks", "Chicken"];
  foodNames: string[] = [];

}
