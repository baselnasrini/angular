import { Injectable, EventEmitter } from '@angular/core';

import {Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
     private recipes: Recipe[] = [
        new Recipe('Kubba','Great dish from Aleppo', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Kibbeh3.jpg', [new Ingredient ('Borgul',1),new Ingredient('meat',2)]),
        new Recipe('Yabraq','Amazing dish from Syria', 'https://modo3.com/thumbs/fit630x300/42422/1438761199/%D9%83%D9%8A%D9%81%D9%8A%D8%A9_%D8%B7%D8%A8%D8%AE_%D8%A7%D9%84%D9%8A%D8%A8%D8%B1%D9%82_%D8%A7%D9%84%D8%B3%D9%88%D8%B1%D9%8A.jpg',  [new Ingredient ('Grape leaves',2),new Ingredient('Rice',1)])
    ];
    
    getRecipes(){
        return this.recipes.slice();
    }
}