import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
    selector: 'app-recpe-item',
    templateUrl: './recpe-item.component.html',
    styleUrls: ['./recpe-item.component.css']
})
export class RecpeItemComponent implements OnInit {
    @Input('recipe') recipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    onSelectedItem($event: MouseEvent) {
      this.recipeService.recipeSelected.emit(this.recipe);
    }
}
