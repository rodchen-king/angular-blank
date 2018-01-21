import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  firstString: string;

  constructor() { }

  ngOnInit() {
    this.firstString = '1. install ng-ueditor';
  }

}
