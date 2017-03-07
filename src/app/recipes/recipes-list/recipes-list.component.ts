import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Couscous', 'Couscous' , 'http://img-3.journaldesfemmes.com/_4PKVAFdUk5PIi0e7BXTbLG_Bsk=/750x/smart/image-icu/389749_5653955834.jpg')
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
	this.recipeSelected.emit(recipe);
  
  }
}
