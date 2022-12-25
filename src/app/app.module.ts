import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table' ;
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './MyComponent/dashboard/dashboard.component';
import { ProductComponent } from './MyComponent/product/product.component';
import { MyCartComponent } from './MyComponent/my-cart/my-cart.component';
import { AdminModule } from './MyComponent/admin/admin.module';
import { ProductsService } from './products.service';
import { ProductItemsComponent } from './MyComponent/product-items/product-items.component';
import { DataTableComponent } from './MyComponent/data-table/data-table.component';
import { AddToCartComponent } from './MyComponent/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    MyCartComponent,
    ProductItemsComponent,
    DataTableComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
