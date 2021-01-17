import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPageRoutingModule } from './management-page-routing.module';
import { ManagementPageComponent } from './management-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagementPageComponent],
  imports: [
    CommonModule,
    ManagementPageRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class ManagementPageModule { }
