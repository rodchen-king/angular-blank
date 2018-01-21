import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UeditorXiumiComponent } from './ueditor-xiumi.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule as CommonPrivateModule} from '../../common/common.module';
import {UEditorModule} from 'ngx-ueditor';
import { XiumiComponent } from './xiumi/xiumi.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { EuditorViewComponent } from './euditor-view/euditor-view.component';

const routes: Routes = [
  {path: '', component:  UeditorXiumiComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonPrivateModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    UEditorModule.forRoot({
      path: 'assets/ueditor/',
      options: {
        themePath: '/assets/ueditor/themes/'
      }
    })
  ],
  declarations: [UeditorXiumiComponent, EuditorViewComponent],
  entryComponents: [EuditorViewComponent]
})
export class UeditorXiumiModule { }
