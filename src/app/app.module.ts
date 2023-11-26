import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { PwgComponent } from './pwg/pwg.component';
import { TypingComponent } from './typing/typing.component';
import { BothComponent } from './both/both.component';
import { Route, RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { TableComponent } from './table/table.component';
import { Table1Component } from './table1/table1.component';
import { WikkipediaComponent } from './wikkipedia/wikkipedia.component';

const routes: Route[]=[
  {path:'welcome' , component:AppComponent},
  {path: 'typing' , component: TypingComponent},
  {path: 'pwg' , component:PwgComponent},
  {path: 'both' , component:BothComponent},
  {path: 'table', component:TableComponent},
  {path: 'wikipedia', component:WikkipediaComponent},
  

];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PwgComponent,
    TypingComponent,
    BothComponent,
    SearchBarComponent,
    PageListComponent,
    TableComponent,
    Table1Component,
    WikkipediaComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
