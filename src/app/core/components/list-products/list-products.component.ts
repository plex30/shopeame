import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() listProd;

  constructor(public router: Router, private productService: ProductsService) { }

  ngOnInit(): void {

  }
  sendProduct(product){
    this.productService.setProduct(product);
    this.router.navigateByUrl('/management');
  }

}
