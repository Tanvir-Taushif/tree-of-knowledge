import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { product } from '../product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit{
  public products:product[];
  displayedColumns: string[] = ['ProductShortCode','ProductImage', 'ProductName', 'Price', 'Origin','Button'];
  dataSource = new MatTableDataSource<product>();
  constructor(private _liveAnnouncer: LiveAnnouncer,private _productsService:ProductsService) { }

  delete(shortCode:any){
    this._productsService.deleteProductItem(shortCode).subscribe(d=>{
      location.reload();
    })
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this._productsService.receiveProduct().subscribe(data=>{
      this.products=data;
      this.dataSource = new MatTableDataSource<product>(this.products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
    
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
