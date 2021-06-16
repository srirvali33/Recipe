import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredients: Ingredient[]=[
    new Ingredient('Strawberry Bread',2),
    new Ingredient('Soft Pretzels',5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
