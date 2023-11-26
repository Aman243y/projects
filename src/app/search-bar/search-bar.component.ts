import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  term:string=''
  onformSubmit(event:any){
    event.preventDefault()

    //console.log(this.term)
    this.newItemEvent.emit(this.term);

  }

}
