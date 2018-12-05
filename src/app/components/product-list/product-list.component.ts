import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers:[ProductService],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle:String="Product-list";

showimage :Boolean=false;


img ():void{
  this.showimage=!this.showimage;

}


  products:IProduct[];
 
  constructor(private p:ProductService) { }

  ngOnInit(): void{
   this.p.getProducts().subscribe((data)=>{
     this.products=JSON.parse(JSON.stringify(data));
   })

   
  }

}
