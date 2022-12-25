import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

import {MyCartComponent} from '../my-cart/my-cart.component';
import {ProductComponent} from '../product/product.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'cart', component:MyCartComponent},
  {path:'products', component:ProductComponent},
  {path:'dashboard/:id', component:AddToCartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
