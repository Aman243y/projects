import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component {

  @Input() data: any[]=[];
  @Input() headers:any[]=[];
}
