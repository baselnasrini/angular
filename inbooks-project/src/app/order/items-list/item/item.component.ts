import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/shared/items.service';
import { Item } from 'src/app/shared/item.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input () item : Item;

  constructor(private itemsService : ItemsService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.itemsService.itemSelected.emit(this.item);
  }
}
