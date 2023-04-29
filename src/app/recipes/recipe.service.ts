import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


@Injectable( {providedIn: 'root'} )
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply the first test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe', 'This is simply the second test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];


        getRecipes() {
            return this.recipes.slice();
        }
}