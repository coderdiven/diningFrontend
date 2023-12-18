import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCataddComponent } from './rest-catadd.component';

describe('RestCataddComponent', () => {
  let component: RestCataddComponent;
  let fixture: ComponentFixture<RestCataddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestCataddComponent]
    });
    fixture = TestBed.createComponent(RestCataddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
