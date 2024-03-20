import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  searchText:string=''

@ViewChild('productListComponent') productListComponent:ProductListComponent



  updateSearchText(value:string){
    this.searchText=value
    //console.log('Search Text:' + value)
  }
}
