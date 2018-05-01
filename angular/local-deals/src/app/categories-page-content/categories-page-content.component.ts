import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-page-content',
  templateUrl: './categories-page-content.component.html',
  styleUrls: ['./categories-page-content.component.css']
})
export class CategoriesPageContentComponent implements OnInit {

  private itemList = [
  	{title: "Tea", price: "Rs. 10.00", id:1},
  	{title: "Coffee", price: "Rs. 15.00", id:2}
  ];

  private tableTitle = "Item-Title";
  private tablePrice = "Item-Price";
  // private tableIsAvail = "Available?";

  constructor() { }

  ngOnInit() {
  }

}
