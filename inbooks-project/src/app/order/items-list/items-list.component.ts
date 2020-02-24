import { Component, OnInit, Injectable } from '@angular/core';

import { ItemsService } from '../../shared/items.service'
import { Item } from 'src/app/shared/item.module';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})

@Injectable({providedIn: 'root'})
export class ItemsListComponent implements OnInit {
  items : Item[];

  constructor(private itemsService : ItemsService) { }

  ngOnInit() : void{
    this.items = this.itemsService.getItems();
    this.itemsService.itemsChanged.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    )
  }
  
}
