import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuditorViewComponent } from './euditor-view.component';

describe('EuditorViewComponent', () => {
  let component: EuditorViewComponent;
  let fixture: ComponentFixture<EuditorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuditorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
