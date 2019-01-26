import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { Food, MiniOrder } from '../objects';
import {FoodService} from '../services/food.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  @Input() currentMasterOrderID: number;

  constructor(
    private foodService: FoodService,
    private router: Router ) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe(
      x => this.foods = x
    )
  }

  foods: Food[] = []
  miniOrders: MiniOrder[] = []
  tableNo: string = ''
  foodTypes: string[] = ["Dessert", "Drinks", "Chicken","Burger","Side Dish"]
  foodNames: string[] = []
  selectedFoodType: string = this.foodTypes[0]
  sortField: string = 'foodName'

  selectType(foodType: string){
    this.selectedFoodType = foodType
  }

  toggleSelect(food: Food){
    const index = this.miniOrders.map(x => x.foodID).indexOf(food.foodID )
    if (index === -1){
      this.miniOrders.push({foodID: food.foodID, foodName: food.foodName, 
        quantity: 1, price: food.price } )
    } else {
      this.miniOrders.splice(index, 1)
    }
  }

  confirm(){
    this.foodService.addOrders(this.miniOrders, this.currentMasterOrderID).subscribe(
      () => { this.router.navigateByUrl("/order") },
      err => window.alert('something wrong. please try again later')
    )
  }



}


@Pipe({
  name: 'filterTypes',
})
export class FilterPipe implements PipeTransform {
  transform(items: Food[], filter: string): Food[] {
    if (!items || !filter){
      return items
    }
    return items.filter(item => item.category === filter)
  }
}

@Pipe({
  name: "sort"
})
export class ArraySortPipe implements PipeTransform {
  transform<T>(array: T[], filter: string): T[] {
    if (!Array.isArray(array)){
      return []
    }
    array.sort((a: T, b: T) => {
      if (a[filter] < b[filter]){
        return -1
      } else if (a[filter] > b[filter]){
        return 1
      } else {
        return 0
      }
    })
    return array
  }
}





