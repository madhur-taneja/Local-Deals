import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import { categoryInterface } from '../models/category';
import { itemInterface } from '../models/item';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  // to store data from database
  private categoryList;
  private displayEdit = false;
  private itemListFromParent:itemInterface[];
  private categoryHeader;

  constructor(private shopkeeperService: ShopkeeperService) {
  }
  
  ngOnInit() {
    this.shopkeeperService.getCategoryListFromDB().subscribe((response)=> {
      console.log(`The response from backend is ${response}`);
      this.categoryList = response;
    });
  }
    
  public getCategoryItems(category: categoryInterface) {
    console.log(`Calling child method for getting items : ${category}`);
    this.categoryHeader = category.title;
    this.shopkeeperService.getItemListFromDB(category).subscribe((response) => {
      this.itemListFromParent = response;
    })
    this.displayEdit = true;
  }

}
