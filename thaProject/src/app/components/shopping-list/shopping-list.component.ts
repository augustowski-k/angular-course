import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('flour', 2),
    new Ingredient('tomato', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    const foundIngredient = this.ingredients.find((i) => i.name.toLowerCase() === ingredient.name.toLowerCase());
    if (foundIngredient) {
      foundIngredient.amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
  }
}
