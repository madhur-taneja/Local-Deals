import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoriesPageContentComponent } from './categories-page-content/categories-page-content.component';

import { ShopkeeperService } from './services/shopkeeper.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    MainPageComponent,
    CategoriesPageContentComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    AuthenticationComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShopkeeperService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
