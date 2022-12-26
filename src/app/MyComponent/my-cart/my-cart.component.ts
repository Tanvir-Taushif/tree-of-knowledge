import { Component,OnInit} from '@angular/core';
import { CartProductsService } from 'src/cart-products.service';
import { CartProduct } from '../CartProduct';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit{
  totalBooks:number=0;
  totalCost:number=0;
  public carts:CartProduct[]=[];
  constructor(private _cartService:CartProductsService){}
  ngOnInit(): void {
    this._cartService.receiveCart().subscribe(data=>{
    this.carts=data;
    this.carts.map(cData=>{
      this.totalBooks+=cData.Quantity;
      this.totalCost+=(cData.Quantity*cData.Price);
    })
    });
  }
}
