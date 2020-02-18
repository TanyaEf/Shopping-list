import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recpe-item',
  templateUrl: './recpe-item.component.html',
  styleUrls: ['./recpe-item.component.css']
})
export class RecpeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
