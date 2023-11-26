import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {
  myText:string='This is some text within a card body.'
  enteredText:string='';

  onInput(value:string){
    this.enteredText=value;
  }
  compare(tl:string,el:string){
    if(!el) return "pendind";
    return tl === el?"correct":"incorrect"

  }

}
