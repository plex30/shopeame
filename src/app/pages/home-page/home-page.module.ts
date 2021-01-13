import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { MainCardComponent } from 'src/app/core/main-card/main-card.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CoreModule
  
   
  ]
})
export class HomePageModule { }
