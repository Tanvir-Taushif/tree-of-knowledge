import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MyCartComponent} from '../my-cart/my-cart.component';
import {ProductComponent} from '../product/product.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'cart', component:MyCartComponent},
  {path:'products', component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
