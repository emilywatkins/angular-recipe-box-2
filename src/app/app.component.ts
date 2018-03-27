import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe';
  currentFocus: string = 'Recipe Box';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedEdit = null;
  selectedView = null;

  masterRecipeList: Recipe[] = [
    new Recipe('Bagel', ['spaghetti', 'jam sauce'], 'mmm toasty', 2),
    new Recipe('Red Velvet Ice Cream', ['Chocolate Chips'], 'Careful now', 3),
    new Recipe('my kids need shoes', ['Green Beans'], 'Marshmallows', 1)
  ];

  editRecipe(clickedRecipe) {
    this.selectedEdit = clickedRecipe;
  }

  viewRecipe(clickedRecipe) {
    this.selectedView = clickedRecipe;
  }

  finishedEditing() {
    this.selectedEdit = null;
  }
}
