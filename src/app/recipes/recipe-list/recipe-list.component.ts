import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a simple test', 
    'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg'),
    new Recipe('Another test recipe', 'this is a simple test', 
    'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
