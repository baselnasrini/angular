import { Injectable, EventEmitter } from '@angular/core';

import { Item } from '../shared/item.module';

@Injectable({providedIn: 'root'})
export class ItemsService{
    itemsChanged = new EventEmitter<Item[]>();
    itemSelected = new EventEmitter<Item>();

    private items: Item []= [
        new Item ('Staples Kopieringspapper Copy A4 oh','5*500 pack','https://www.staples.se/kopieringspapper-staples-copy-a4-80g-oh-500/cbs/177195.html?promoCode=&Effort_Code=WW&Find_Number=177195&m=0&isSubscription=False'),
        new Item ('Staples Kopieringspapper Copy A4 h','5*500 pack','https://www.staples.se/kopieringspapper-staples-copy-a4-80g-h-500/cbs/122644.html?promoCode=&Effort_Code=WW&Find_Number=122644&m=0&isSubscription=False'),
        new Item ('Pilot Gelpenna','0,5 mm ljusblå','https://www.staples.se/rollerball-pennor/cbs/150676.html?promoCode=&Effort_Code=WW&Find_Number=150676&m=0&isSubscription=False')
      ];

      getItems(){
        return this.items.slice();
    }

    addItem(input: Item){
        this.items.push(input);
        this.itemsChanged.emit(this.items.slice());
      }

}