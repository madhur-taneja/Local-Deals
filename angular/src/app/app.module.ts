import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageContentComponent } from './categories-page-content/categories-page-content.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopkeeperService } from './services/shopkeeper.service';

// To implement routing facility so that we can route components on basics of URL.
// Array of routes in the whole website.
const routes: Routes = [
  // redirect to home when user types URL as localhost:4200
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'login', component : MainPageComponent },
  { path: 'home', component : MainPageComponent },
  { path: 'shopkeeper/dashboard', component : CategoriesPageComponent }
]


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
