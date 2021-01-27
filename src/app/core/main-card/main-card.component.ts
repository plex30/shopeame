import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContentProductsComponent } from './pages-content/content-products/content-products.component';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {

  products;
  numProd;

  @ViewChild(ContentProductsComponent) content: ContentProductsComponent;

  send(){
    this.numProd = this.content.sendCount();
    console.log(this.numProd)
  }

  constructor(public router: Router) { }

  ngOnInit(): void {


  }

}
