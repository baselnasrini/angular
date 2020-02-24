import { Component, OnInit } from '@angular/core';

import { Item } from '../shared/item.module';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'shopping-cart-list',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items : Item[];

  constructor(private olService: ShoppingCartService) { }

  ngOnInit(): void {
    this.items = this.olService.getCart();
    this.olService.itemsChanges.subscribe(
      (items : Item[]) =>{
        this.items = items;
      }
    )
  }

  delete(item : number){
    this.olService.delete(item);
  }
}
