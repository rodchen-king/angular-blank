import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '../common/common.module';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path: '', component:  UserComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, AddUserComponent],
  entryComponents: [AddUserComponent]
})
export class UserModule {
  constructor() {
  }
}
