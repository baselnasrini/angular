import { Injectable, EventEmitter, OnInit } from '@angular/core';

import { Item } from '../shared/item.module';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable({providedIn: 'root'})
export class ShoppingCartService implements OnInit {
  
    itemsChanges = new EventEmitter<Item[]>();

    private shoppingCart: Item []= [];

      constructor(private storage: SessionStorageService ) {}

      ngOnInit(): void {
        this.storage.store('shopping-cart-storage', this.shoppingCart);
      }

      getCart(){
          return this.storage.retrieve('shopping-cart-storage')
      }

      addToCart(input: Item){
        this.shoppingCart.push(input);
        this.itemsChanges.emit(this.shoppingCart.slice());
        this.storage.store('shopping-cart-storage', this.shoppingCart);
      }

      delete(itemIndex : number){
        this.shoppingCart.splice(itemIndex,1);
        this.itemsChanges.emit(this.shoppingCart.slice());
        this.storage.store('shopping-cart-storage', this.shoppingCart);
      }
}