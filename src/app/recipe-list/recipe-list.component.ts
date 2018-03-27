import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  hoursColor(currentRecipe) {
    if (currentRecipe.hours === 3) {
      return "bg-danger";
    } else if (currentRecipe.hours === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editButtonClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  constructor() { }


}
