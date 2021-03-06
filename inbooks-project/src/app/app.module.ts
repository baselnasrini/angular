import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderComponent } from './order/order.component';
import { ItemsListComponent } from './order/items-list/items-list.component';
import { ItemDetailComponent } from './order/item-detail/item-detail.component';
import { AddItemComponent } from './order/add-item/add-item.component';
import { ItemComponent } from './order/items-list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    ShoppingCartComponent,
    HomeComponent,
    PageNotFoundComponent,
    ItemsListComponent,
    OrderComponent,
    ItemDetailComponent,
    AddItemComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot({prefix:'inbooks'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
