import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentSideBarComponent } from './main-content-side-bar.component';

describe('MainContentSideBarComponent', () => {
  let component: MainContentSideBarComponent;
  let fixture: ComponentFixture<MainContentSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
