import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {NzSubMenuComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef, private activeRoute: ActivatedRoute, private router: Router) { }

  @ViewChild('ueditor') ueditor: NzSubMenuComponent

  @ViewChild('angular') angular: NzSubMenuComponent

  ngOnInit() {
    if (window.location.href.indexOf('ueditor') > 0) {
      this.ueditor.nzOpen = true;
      this.angular.nzOpen = false;

    }

    if (window.location.href.indexOf('angular') > 0) {
      this.angular.nzOpen = true;
      this.ueditor.nzOpen = false;
    }

    this.router.events
      .subscribe((event) => {
        // example: NavigationStart, RoutesRecognized, NavigationEnd
        if (event instanceof NavigationEnd) { // 当导航成功结束时执行
          console.log('NavigationEnd:', event);

          if (event.url.toString().indexOf('ueditor') > 0) {
            this.ueditor.nzOpen = true;
            this.angular.nzOpen = false;

          }

          if (event.url.toString().indexOf('angular') > 0) {
            this.angular.nzOpen = true;
            this.ueditor.nzOpen = false;
          }
        }
      });
  }

  ngAfterViewInit(): void {
    console.log(this.activeRoute.url);
  }
}
