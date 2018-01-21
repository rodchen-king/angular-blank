import { Component, OnInit } from '@angular/core';
import { HttpService } from '../common/service/http.service';
import { NzModalService } from 'ng-zorro-antd';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private httpService: HttpService, private nzModalService: NzModalService) { }

  ngOnInit() {
  }

  addNewUser() {
  	 let addApplicationSubscription  =  this.nzModalService.open({
      title: 'Create Admin User Info',
      content: AddUserComponent,
      componentParams: {
      },
      footer: false,
      onCancel() {
      }
    });
  }
}
