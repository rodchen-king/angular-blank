import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeditorXiumiComponent } from './ueditor-xiumi.component';

describe('UeditorXiumiComponent', () => {
  let component: UeditorXiumiComponent;
  let fixture: ComponentFixture<UeditorXiumiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeditorXiumiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeditorXiumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
