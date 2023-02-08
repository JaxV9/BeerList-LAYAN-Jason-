import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
