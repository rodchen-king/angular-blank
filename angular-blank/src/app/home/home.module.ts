import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { HeaderComponent } from './theme/header/header.component';
import { MainComponent } from './theme/main/main.component';
import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { DashboardComponent } from './theme/dashboard/dashboard.component';
import {HttpServiceService} from '../common/service/http-service.service';
import {Http, HttpModule} from '@angular/http';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {XiumiComponent} from './ueditor-xiumi/xiumi/xiumi.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '/xiumi', component: XiumiComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '', component: DashboardComponent,
      },
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: 'ueditor', loadChildren: './ueditor-xiumi/ueditor-xiumi.module#UeditorXiumiModule'
      },
      {
        path: 'angular', loadChildren: './angular/angular.module#AngularModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [HomeComponent, HeaderComponent, MainComponent, SidebarComponent, DashboardComponent, XiumiComponent ],
  providers: [HttpServiceService, Location],
  entryComponents: []
})
export class HomeModule { }
