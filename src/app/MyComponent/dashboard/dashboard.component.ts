import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products:product[]=[];
  constructor(private _productsService:ProductsService){}
  ngOnInit(): void {
    this._productsService.receiveProduct().subscribe(data=>{
      this.products=data;
    });
  }
}
