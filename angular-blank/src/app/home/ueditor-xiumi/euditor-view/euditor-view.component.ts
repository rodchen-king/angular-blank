import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-euditor-view',
  templateUrl: './euditor-view.component.html',
  styleUrls: ['./euditor-view.component.css']
})
export class EuditorViewComponent implements OnInit {
  private article: string;
  constructor() { }

  ngOnInit() {
  }

}
