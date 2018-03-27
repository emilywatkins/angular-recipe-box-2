import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSenderEdit = new EventEmitter();
  @Output() clickSenderView = new EventEmitter();

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
    this.clickSenderEdit.emit(recipeToEdit);
  }

  viewButtonClicked(recipeToView: Recipe) {
    this.clickSenderView.emit(recipeToView);
  }

  constructor() { }


}
