import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetalComponent } from './user-detal.component';

describe('UserDetalComponent', () => {
  let component: UserDetalComponent;
  let fixture: ComponentFixture<UserDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
