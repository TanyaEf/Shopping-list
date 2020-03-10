import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingridient} from '../shared/Ingridient.mode';

export class RecipeService {

    private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingridient('Meat', 1),
        new Ingridient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingridient('Buns', 2),
        new Ingridient('Meat', 1)
      ])
  ];
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes() {
    // TODO fix slice()
    // return this.recipes.slice();
    return this.recipes;
  }


}
