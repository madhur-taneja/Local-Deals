import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageContentComponent } from './categories-page-content/categories-page-content.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    MainPageComponent,
    CategoriesPageContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
