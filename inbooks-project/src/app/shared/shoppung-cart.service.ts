import { Injectable, EventEmitter } from '@angular/core';

import { Item } from '../shared/item.module';

@Injectable({providedIn: 'root'})
export class ShoppingCartService{
    itemsChanges = new EventEmitter<Item[]>();

    private shoppingCart: Item []= [
      ];

      getCart(){
          return this.shoppingCart.slice();
      }

      addToCart(input: Item){
        this.shoppingCart.push(input);
        this.itemsChanges.emit(this.shoppingCart.slice());
      }

      delete(itemIndex : number){
        this.shoppingCart.splice(itemIndex,1);
        this.itemsChanges.emit(this.shoppingCart.slice());

      }
}