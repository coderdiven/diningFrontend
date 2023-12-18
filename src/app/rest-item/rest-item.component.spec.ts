import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestItemComponent } from './rest-item.component';

describe('RestItemComponent', () => {
  let component: RestItemComponent;
  let fixture: ComponentFixture<RestItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestItemComponent]
    });
    fixture = TestBed.createComponent(RestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
