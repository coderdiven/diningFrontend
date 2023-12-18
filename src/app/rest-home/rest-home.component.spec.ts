import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestHomeComponent } from './rest-home.component';

describe('RestHomeComponent', () => {
  let component: RestHomeComponent;
  let fixture: ComponentFixture<RestHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestHomeComponent]
    });
    fixture = TestBed.createComponent(RestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
