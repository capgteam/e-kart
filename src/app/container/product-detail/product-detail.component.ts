import { Component,Input,OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  @Input()
  product:Product
  
  ngOnInit(){
    console.log(this.product)
  }

}
