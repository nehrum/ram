import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurdComponent } from './user-curd.component';

describe('UserCurdComponent', () => {
  let component: UserCurdComponent;
  let fixture: ComponentFixture<UserCurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
