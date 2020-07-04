import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentScrollTopModalComponent } from './main-content-scroll-top-modal.component';

describe('MainContentScrollTopModalComponent', () => {
  let component: MainContentScrollTopModalComponent;
  let fixture: ComponentFixture<MainContentScrollTopModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentScrollTopModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentScrollTopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
