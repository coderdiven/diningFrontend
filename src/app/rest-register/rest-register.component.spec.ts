import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestRegisterComponent } from './rest-register.component';

describe('RestRegisterComponent', () => {
  let component: RestRegisterComponent;
  let fixture: ComponentFixture<RestRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestRegisterComponent]
    });
    fixture = TestBed.createComponent(RestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
