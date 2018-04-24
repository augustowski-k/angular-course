import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza',
      'Pizza is the most delicious meal in the world.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApjAuZFUPKFA7hYAQYjtpe2cijnFjJd6w9bhH__Tq9LK9AD5Ceg'),
    new Recipe('Fried chicken',
      'Very nice chicken recipe.',
      'https://c1.staticflickr.com/5/4179/34594122281_aa1ba76307_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
