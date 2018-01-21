import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XiumiComponent } from './xiumi.component';

describe('XiumiComponent', () => {
  let component: XiumiComponent;
  let fixture: ComponentFixture<XiumiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiumiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
