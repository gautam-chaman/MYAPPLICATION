import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NewproductComponent } from './newproduct/newproduct.component';


@NgModule({
  declarations: [
    ProductdetailComponent,
    NewproductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
