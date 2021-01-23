import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-content-products',
  templateUrl: './content-products.component.html',
  styleUrls: ['./content-products.component.scss']
})
export class ContentProductsComponent implements OnInit {
  products;

  constructor(private productsService: ProductsService, public router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products=>{
      this.products = products;
    
    })

     this.products = this.searchService.getFilterProducts().subscribe(fprod=>{
       console.log(fprod)
     })
    /* if (this.searchService.getFilterProducts()) {
      this.searchService.getFilterProducts().subscribe(filterProd=>{
        this.products = filterProd;
      })
    } */
    
  }

}
