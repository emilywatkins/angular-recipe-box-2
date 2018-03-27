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
    new Recipe('Bagel', 'With Jam', 'mmm toasty'),
    new Recipe('Red Velvet Ice Cream', 'Chocolate Chips', 'Careful now')
  ];
}
