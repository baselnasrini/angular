import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../shared/item.module';

@Injectable({providedIn: 'root'})
export class ItemsService{
    itemsChanged = new EventEmitter<Item[]>();
    itemSelected = new EventEmitter<Item>();

    private items: Item []= []
    constructor(private http : HttpClient) {}
 
    getItems() {
      this.http.get <Item[]> ('https://inbooks-53a34.firebaseio.com/items.json').subscribe(
			res => {
         this.items = res;
         this.itemsChanged.emit(res.slice());
    });
    return this.items;
    }

   
    addItem(input: Item){
      this.items.push(input);
      this.http.put('https://inbooks-53a34.firebaseio.com/items.json', this.items.slice()).subscribe(
			res => {
        console.log(res);
        this.itemsChanged.emit(this.items.slice());
	  	});
      
      }

}