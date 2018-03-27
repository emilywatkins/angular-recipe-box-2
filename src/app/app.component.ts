import { Component } from '@angular/core';
import { Recipe } from './models/task.model';

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
  recipes: Recipe[] = [
    new Recipe('Bagel', ['spaghetti', 'jam sauce'], 'mmm toasty', 2),
    new Recipe('Red Velvet Ice Cream', ['Chocolate Chips'], 'Careful now', 3),
    new Recipe('my kids need shoes', ['Green Beans'], 'Marshmallows', 1)
  ];

  selectedEdit = null;
  selectedView = null;

  editRecipe(clickedRecipe) {
    this.selectedEdit = clickedRecipe;
  }
  viewRecipe(clickedRecipe) {
    this.selectedView = clickedRecipe;
  }

  finishedEditing() {
    this.selectedEdit = null;
  }

  hoursColor(currentRecipe) {
    if (currentRecipe.hours === 3) {
      return "bg-danger";
    } else if (currentRecipe.hours === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
