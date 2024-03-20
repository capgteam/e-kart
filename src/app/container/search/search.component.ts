import { Component,EventEmitter,Output,ViewChild,ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string=''

  @ViewChild('searchInput') searchInputEl: ElementRef=undefined

  @Output()
  searchTextChanged: EventEmitter<string>=new EventEmitter<string>()

  onChangeOfSearchText(){
    this.searchTextChanged.emit(this.searchText)
  }

  /*updateSearchText(inputEl: HTMLInputElement){
   // console.log(inputEl.value)
    this.searchText=inputEl.value
    this.searchTextChanged.emit(this.searchText)
  }*/

 /* ngOnInit(): void {
    console.log(this.searchInputEl.nativeElement.value)
  }*/

  updateSearchText(){
    console.log(this.searchInputEl.nativeElement.value)
    this.searchText=this.searchInputEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText)
  }

}
