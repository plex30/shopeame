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
  
  constructor(public router: Router, private productService: ProductsService) { }

  ngOnInit(): void {
  }

  sendProduct(product){
    this.productService.setProduct(product);
    this.router.navigateByUrl('/management');
  }

  deleteProduct(product){
    let ok = confirm('¿Está seguro que desea eliminar el producto?');
    if (ok == true) {
      this.productService.delProduct(product).subscribe();
      location.reload();
    }
    
    
  }

}
