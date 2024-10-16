import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
