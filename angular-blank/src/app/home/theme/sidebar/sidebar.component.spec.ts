import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SldebarComponent } from './sidebar.component';

describe('SldebarComponent', () => {
  let component: SldebarComponent;
  let fixture: ComponentFixture<SldebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SldebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SldebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
