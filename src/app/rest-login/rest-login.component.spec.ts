import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestLoginComponent } from './rest-login.component';

describe('RestLoginComponent', () => {
  let component: RestLoginComponent;
  let fixture: ComponentFixture<RestLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestLoginComponent]
    });
    fixture = TestBed.createComponent(RestLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
