import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { ProductComponent } from './MyComponent/product/product.component';
import { MyCartComponent } from './MyComponent/my-cart/my-cart.component';
import { AdminModule } from './MyComponent/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    MyCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
