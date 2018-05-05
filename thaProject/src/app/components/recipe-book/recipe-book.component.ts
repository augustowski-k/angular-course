import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  chosenRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipe: Recipe) {
    this.chosenRecipe = recipe;
  }
}
