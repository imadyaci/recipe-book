import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
	new Recipe('I test recipe', 'Hello', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/20161201_211344_rechta.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
