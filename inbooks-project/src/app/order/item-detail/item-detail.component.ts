import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/shared/items.service';
import { Item } from 'src/app/shared/item.module';
import { ShoppingCartService } from 'src/app/shared/shoppung-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;
  

  constructor(private scService : ShoppingCartService) { }

  ngOnInit(): void {
  }

  onAddtoCart(){
    this.scService.addToCart(this.item);
  }

}
