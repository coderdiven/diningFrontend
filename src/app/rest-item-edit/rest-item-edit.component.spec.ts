import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestItemEditComponent } from './rest-item-edit.component';

describe('RestItemEditComponent', () => {
  let component: RestItemEditComponent;
  let fixture: ComponentFixture<RestItemEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestItemEditComponent]
    });
    fixture = TestBed.createComponent(RestItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
