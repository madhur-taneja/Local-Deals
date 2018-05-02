import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageContentComponent } from './categories-page-content/categories-page-content.component';

import { ShopkeeperService } from './services/shopkeeper.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    MainPageComponent,
    CategoriesPageContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShopkeeperService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }