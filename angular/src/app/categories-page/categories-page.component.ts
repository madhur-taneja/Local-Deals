import { Component, OnInit } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import {categoryInterface} from '../models/category';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  constructor(private shopkeeperService: ShopkeeperService) {
  }
  // to store data from database
  private categoryList;

  ngOnInit() {
    this.shopkeeperService.getCategoryListFromDB().subscribe((response)=> {
      //console.log(`The response from backend is ${response}`);
      this.categoryList = response;
    });
  }
  
  public getCategoryItems(categoryTitle) {
    console.log(`The category is: ${categoryTitle}`);
  }

}
