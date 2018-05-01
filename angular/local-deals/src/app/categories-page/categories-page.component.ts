import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  private categoryList = [
    {title: "CAKE", id:1},
    {title: "BISCUITS", id:2},
    {title: "NAMKEEN", id:3},
    {title: "BEVERAGES", id:4}
  ];

  constructor() { }

  ngOnInit() {
  }

  public getCategoryItems(categoryTitle) {
    console.log(`The category is: ${categoryTitle}`);
  }

}
