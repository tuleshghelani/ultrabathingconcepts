import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CategoryWiseProductComponent } from './category-wise-product.component';
import { CategoryWiseProductRoutingModule } from './category-wise-product-routing.module';

@NgModule({
  declarations: [CategoryWiseProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    CategoryWiseProductRoutingModule
  ]
})
export class CategoryWiseProductModule { }
