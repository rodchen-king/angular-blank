import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { NumberFilterPipe } from './pipe/number-filter.pipe';
import { ButtonDirective } from './directive/button.directive';
import {HttpService} from './service/http.service';
import {NgZorroAntdModule, NzModalService} from 'ng-zorro-antd';
import { StepComponent } from './component/step/step.component';
import {CommonModule as AngularCommonModule} from '@angular/common';

@NgModule({
  imports: [
    NgZorroAntdModule,
    AngularCommonModule
  ],
  declarations: [
    CommonComponent,
    NumberFilterPipe,
    ButtonDirective,
    StepComponent
  ],
  exports: [
    CommonComponent,
    NumberFilterPipe,
    ButtonDirective,
    StepComponent
  ],
  providers: [
    NzModalService
  ],
})
export class CommonModule { }
