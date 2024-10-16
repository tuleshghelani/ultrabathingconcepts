// src/app/about-us/about-us-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryWiseProductComponent } from './category-wise-product.component';

const routes: Routes = [
  { path: '', component: CategoryWiseProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryWiseProductRoutingModule { }
