import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { product } from '../product';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  public products:product[]=[];
  public prod:product[]=[];
  newProduct:any={};
  flag:boolean=false;
  getValues(inputForm,val){
    this.flag=false;
    this.newProduct=val;
    this.prod.map(d=>{
      if(d.ProductName==val.ProductName || d.ProductShortCode==val.ProductShortCode){
        console.log(d.ProductName);
        this.flag=true;
      }
    });
    inputForm.reset();
    if(this.flag==false){
      this._productsService.addProductItem(this.newProduct).subscribe(d=>{

      })
    }
  }
  constructor(private _productsService:ProductsService){}

  ngOnInit(): void {
    this._productsService.receiveProduct().subscribe(data=>{
    this.products=data;
    this.products.map(d=>{
      this.prod.push(d);
    })
  })}
}
