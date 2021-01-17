import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule


    
  ],exports: [CardComponent]
})
export class SharedModule { }
