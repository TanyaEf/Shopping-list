import { Component, OnInit } from '@angular/core';
import {Ingridient} from '../shared/Ingridient.mode';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded(ingredientAdded: Ingridient) {
    this.ingredients.push(ingredientAdded);
  }
}
