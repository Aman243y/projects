import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data =[
    {name:'aman yadav',job:'designer',age:23},
    {name:'ajay yadav',job:'Phtographer',age:27},
    {name:'tanuj yadav',job:'designer',age:23}


  ];
  headers=[
    {key:'name',label:'Name'},
    {key:'job',label:'Job'},
    {key:'age',label:'Age'}

  ];

  mata =[
    {name:'aman yadav',job:'designer',age:23, status:'single'},
    {name:'ajay yadav',job:'Phtographer',age:27 ,status:'single'},
    {name:'tanuj yadav',job:'designer',age:23 ,status:'single'}


  ];
  heaters=[
    {key:'name',label:'Nameshwar'},
    {key:'job',label:'Jobeshwar'},
    {key:'age',label:'Ageshwar'},
    {key:'status',label:'stashwar'}


  ];
  nata =[
    {name:'aman yadav',job:'designer',age:23, status:'single',salary:'25k$'},
    {name:'ajay yadav',job:'Phtographer',age:27 ,status:'single'},
    {name:'tanuj yadav',job:'designer',age:23 ,status:'single'}


  ];
  seaters=[
    {key:'name',label:'Nameshwar'},
    {key:'job',label:'Jobeshwar'},
    {key:'age',label:'Ageshwar'},
    {key:'status',label:'stashwar'}


  ];


}
