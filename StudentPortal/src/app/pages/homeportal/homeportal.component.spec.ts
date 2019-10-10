import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeportalComponent } from './homeportal.component';

describe('HomeportalComponent', () => {
  let component: HomeportalComponent;
  let fixture: ComponentFixture<HomeportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
