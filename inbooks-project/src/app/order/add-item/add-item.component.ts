import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { ItemsService } from '../../shared/items.service'
import { Item } from 'src/app/shared/item.module';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('descInput', {static: false}) descInputRef: ElementRef;
  @ViewChild('urlInput', {static: false}) urlInputRef: ElementRef;

  constructor(private itemsService : ItemsService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.itemsService.addItem(new Item(
      this.nameInputRef.nativeElement.value,
      this.descInputRef.nativeElement.value,
      this.urlInputRef.nativeElement.value
    ));
    
    this.nameInputRef.nativeElement.value=''
    this.descInputRef.nativeElement.value=''
    this.urlInputRef.nativeElement.value=''
    }

}
