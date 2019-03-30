import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Test Recipe','Testing Use Recipe','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Test Recipe','Testing Use Recipe','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  ];
  constructor() { }

  ngOnInit() {
    console.log("recipes",this.recipes)
  }
  onRecieSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
    
  }

}
