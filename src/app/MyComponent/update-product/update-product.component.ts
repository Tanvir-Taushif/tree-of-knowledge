import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productID;
  product:any;
  selectedProduct:any={};
  constructor(private activateRoute:ActivatedRoute,private service:ProductsService){}
  ngOnInit(): void {
    this.productID=this.activateRoute.snapshot.paramMap.get('id');
    this.service.receiveProduct().subscribe(data=>{
      data.map(d=>{
        if(d.ProductShortCode==this.productID){
          this.product=d;
          console.log(this.product.ProductName)
        }
      })
     });
     if(this.product==undefined){
      this.product='';
     }
  }

  updateProduct(val){
    this.service.updateProductItem(val).subscribe(d=>{})
    console.log(val);
  }
  
}
