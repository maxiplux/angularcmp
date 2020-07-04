import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentTopBarComponent } from './main-content-top-bar.component';

describe('MainContentTopBarComponent', () => {
  let component: MainContentTopBarComponent;
  let fixture: ComponentFixture<MainContentTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
