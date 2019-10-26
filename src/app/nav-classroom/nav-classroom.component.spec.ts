import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavClassroomComponent } from './nav-classroom.component';

describe('NavClassroomComponent', () => {
  let component: NavClassroomComponent;
  let fixture: ComponentFixture<NavClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
