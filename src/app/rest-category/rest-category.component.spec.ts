import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCategoryComponent } from './rest-category.component';

describe('RestCategoryComponent', () => {
  let component: RestCategoryComponent;
  let fixture: ComponentFixture<RestCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestCategoryComponent]
    });
    fixture = TestBed.createComponent(RestCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
