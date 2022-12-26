import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { CartProductsService } from 'src/cart-products.service';
import { CartProduct } from '../CartProduct';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{

  productID;
  product:any;
  selectedProduct:any={};
  counter:number=1;
  constructor(private activateRoute:ActivatedRoute,private service:ProductsService,private cartService:CartProductsService){}
  ngOnInit(): void {
    this.productID=this.activateRoute.snapshot.paramMap.get('id');
    this.service.receiveProduct().subscribe(data=>{
      data.map(d=>{
        if(d.ProductShortCode==this.productID){
          this.product=d;
        }
      })
     });
     if(this.product==undefined){
      this.product='';
     }
  }
  decVal(val:string){
    parseInt(val)>1? this.counter=parseInt(val)-1:this.counter=1;
  }
  incVal(val:string){
    this.counter=parseInt(val)+1;
  }
  addToCart(getProduct,product_quantity){
    this.selectedProduct['Price']=getProduct.Price;
    this.selectedProduct['ProductID']=getProduct.ProductShortCode;
    this.selectedProduct['ProductName']=getProduct.ProductName;
    this.selectedProduct['Quantity']=parseInt(product_quantity.value);
    this.selectedProduct['image']=getProduct.ImageUrl;
    this.cartService.addCartItem(this.selectedProduct).subscribe(d=>{

    })
  }
}
