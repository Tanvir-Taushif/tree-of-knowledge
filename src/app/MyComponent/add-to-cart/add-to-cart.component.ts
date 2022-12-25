import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{

  productID;
  product;
  constructor(private activateRoute:ActivatedRoute,private service:ProductsService){}
  ngOnInit(): void {
    this.productID=this.activateRoute.snapshot.paramMap.get('id');
    this.product=this.service.products.find(product=>product.ProductShortCode==this.productID);
    console.log(this.product);
  }
}
