import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }

  data;

  ngOnInit(): void {
    this.data = this.productService.getProduct();
  }

 

}
