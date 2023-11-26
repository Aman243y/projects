import { Component } from '@angular/core';
import { PediaService } from './pedia.service';

@Component({
  selector: 'app-wikkipedia',
  templateUrl: './wikkipedia.component.html',
  styleUrls: ['./wikkipedia.component.css']
})
export class WikkipediaComponent {
  
  pages:any=[];

  constructor(private ps:PediaService){}
  
  onEmit(event:string){
    //console.log(event)

    this.ps.getData(event).subscribe((res:any)=> {
      this.pages =res.query.search;
      console.log(this.pages)

    });
  }
  
  
}
