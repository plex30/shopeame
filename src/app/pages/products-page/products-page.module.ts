import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ProductsPageModule { }
