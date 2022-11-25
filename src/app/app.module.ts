import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCartComponent,
    ViewCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
