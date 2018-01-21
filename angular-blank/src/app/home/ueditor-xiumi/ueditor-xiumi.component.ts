import {Component, OnInit, ViewChild} from '@angular/core';
import {UEditorComponent} from 'ngx-ueditor';
import {EuditorViewComponent} from './euditor-view/euditor-view.component';
import {NzModalService} from 'ng-zorro-antd';
import {DomSanitizer} from '@angular/platform-browser';

declare const UE: any;

@Component({
  selector: 'app-ueditor-xiumi',
  templateUrl: './ueditor-xiumi.component.html',
  styleUrls: ['./ueditor-xiumi.component.css']
})

export class UeditorXiumiComponent implements OnInit {

  private articles: Array<string> = [];

  constructor(private nzModalService: NzModalService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  @ViewChild('full') full: UEditorComponent;
  full_source: string;

  onPreReady(comp: UEditorComponent) {
    UE.registerUI('dialog', function (editor, uiName) {
      const btn = new UE.ui.Button({
        name   : 'xiumi-connect',
        title  : 'xiumi',
        onclick: function () {
          const dialog = new UE.ui.Dialog({
            iframeUrl: 'xiumi',
            editor   : editor,
            name     : 'xiumi-connect',
            title    : 'xiumi help',
            cssRules : 'width: ' + (window.innerWidth - 60) + 'px;' + 'height: ' + (window.innerHeight - 60) + 'px;',
          });
          dialog.render();
          dialog.open();
        }
      });

      return btn;
    });
  }

  addArticle() {
    if (this.full.Instance.getContent().toString().length <= 0) {
      return;
    }

    let contentString = this.full.Instance.getContent();
    contentString = this.sanitizer.bypassSecurityTrustHtml(contentString);

    this.articles.push(contentString);

    this.full.Instance.setContent('');
  }

  viewArticle(article: HTMLElement) {
    const viewArticleSubscription  =  this.nzModalService.open({
      // title: `View Article`,
      width: '0px',
      content: EuditorViewComponent,
      componentParams: {
        article: article
      },
      footer: false,
      onCancel() {
      },
      closable: false
    });
  }
}
