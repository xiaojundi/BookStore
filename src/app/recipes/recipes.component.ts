import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]    // there is no "" here
})
export class RecipesComponent implements OnInit {
  recipes = [];
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe)=>{
        this.selectedRecipe = recipe;
      }
    )
  }

}
