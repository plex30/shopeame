import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data;
  products: any = {};

    
  constructor(private router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
  }

  sendProduct(product){
    this.productService.setProduct(product);
    this.router.navigateByUrl('/management');
  }

}
