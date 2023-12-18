import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestItemAddComponent } from './rest-item-add.component';

describe('RestItemAddComponent', () => {
  let component: RestItemAddComponent;
  let fixture: ComponentFixture<RestItemAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestItemAddComponent]
    });
    fixture = TestBed.createComponent(RestItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
