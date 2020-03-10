import {Ingridient} from '../shared/Ingridient.mode';
import {EventEmitter, Output} from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10)
  ];

  ingredientAdded = new EventEmitter<Ingridient[]>();

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingridient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingridient[]) {
      this.ingredients.push(...ingredients);
  }
}
