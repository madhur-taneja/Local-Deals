import { Component, OnInit, Input } from '@angular/core';
import { ShopkeeperService } from '../services/shopkeeper.service';
import { itemInterface } from '../models/item';
import { categoryInterface, category } from '../models/category';

@Component({
  selector: 'app-categories-page-content',
  templateUrl: './categories-page-content.component.html',
  styleUrls: ['./categories-page-content.component.css']
})
export class CategoriesPageContentComponent implements OnInit {

  @Input() itemList:itemInterface[];
  @Input() tableHeader;

  private tableTitle = "Item-Title";
  private tablePrice = "Item-Price";
  // private tableIsAvail = "Available";

  constructor(private shopkeeperService:ShopkeeperService) { }

  ngOnInit() {
    console.log("Content has been loded!");
  }

}
