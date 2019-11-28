import { Component, OnInit, Input } from '@angular/core';

declare let VERSION: string;

@Component({

  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']


})
export class AppComponent implements OnInit{
  //  template: '<h1 (click)="this.onClick()">Custom Element works!</h1>'
  @Input() elem:any;
  constructor() {
    console.debug('started!');
    console.debug('VERSION', VERSION);
  }
  ngOnInit(){
    console.log(this.elem);
  }
  onClick(){
    console.log(this.elem);
  }
}
