import { Component, Input, OnInit } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input() product:product;
  ngOnInit(): void {
    
  }
}
