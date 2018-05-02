import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  constructor(private shopkeeperService: ShopkeeperService) {
    this.getCategory();
  }

  ngOnInit() {
  }

  // to store data from database
  private categoryList;

  public getCategoryItems(categoryTitle) {
    console.log(`The category is: ${categoryTitle}`);
  }

  public getCategory() {
    this.categoryList = this.shopkeeperService.getCategoryListFromDB().subscribe();
  }

}
