import { Injectable } from '@angular/core';
import {Http, Request, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable()
export class HttpServiceService {

  constructor(public http: Http, private _message: NzMessageService) {
  }

  createSuccessMessage = (messasge) => {
    this._message.success(messasge, {nzDuration: 3000});
  }

  createFailMessage = (messasge) => {
    this._message.error(messasge, {nzDuration: 3000});
  }
}
