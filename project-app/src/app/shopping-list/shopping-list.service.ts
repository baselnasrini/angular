import { Injectable, EventEmitter } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient []= [
        new Ingredient ('Apples' , 5),
        new Ingredient ('Tomato' , 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(input: Ingredient){
        this.ingredients.push(input);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}