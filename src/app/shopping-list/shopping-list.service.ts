import { Ingredient } from '../shared/ingredient.model';



export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 10)
  ];
  getIngredients() {
    return this.ingredients;
  }
  addIngredients(ingredient: Ingredient[]) {
    console.log(ingredient);
    this.ingredients.push(...ingredient);
  }
}
