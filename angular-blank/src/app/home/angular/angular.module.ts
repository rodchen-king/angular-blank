import { NgModule } from '@angular/core';
import { AngularComponent } from './angular.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule as CommonPrivateModule} from '../../common/common.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component:  AngularComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonPrivateModule
  ],
  declarations: [AngularComponent]
})
export class AngularModule { }
