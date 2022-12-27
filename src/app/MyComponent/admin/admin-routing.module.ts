import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

import {MyCartComponent} from '../my-cart/my-cart.component';
import {ProductComponent} from '../product/product.component';
import { SliderComponent } from '../slider/slider.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

const routes: Routes = [
  {path:'', component:SliderComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'cart', component:MyCartComponent},
  {path:'products', component:ProductComponent},
  {path:'dashboard/:id', component:AddToCartComponent},
  {path:'products/add-products', component:AddNewProductComponent},
  {path:'products/update-product/:id', component:UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
