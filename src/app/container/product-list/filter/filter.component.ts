import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  totalStock:number=0

  @Input()
  total_in_stock:number=0

  @Input()
  total_out_of_stock:number=0

  selectedRadioButton:string='all'

  @Output()
  onSlectedfRadioButton:EventEmitter<string> = new EventEmitter<string>()

  onChangeOfFilterRadioButton(){
   // console.log('Radio Button Raise the event!')
    //console.log(this.selectedRadioButton)
    this.onSlectedfRadioButton.emit(this.selectedRadioButton)
  }
}
