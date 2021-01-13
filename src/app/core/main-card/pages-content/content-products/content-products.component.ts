import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-content-products',
  templateUrl: './content-products.component.html',
  styleUrls: ['./content-products.component.scss']
})
export class ContentProductsComponent implements OnInit {
  products;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products=>{
      console.log(products)
      this.products = products;
    })
  }

}
