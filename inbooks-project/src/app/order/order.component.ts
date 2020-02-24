import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.module';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input () selectedItem : Item;

  constructor(private itemsService : ItemsService , private newsService : NewsService) { }

  ngOnInit(): void {
    this.itemsService.itemSelected.subscribe(
      (item: Item) => {
        this.selectedItem = item;
      }
    )
  }
}
