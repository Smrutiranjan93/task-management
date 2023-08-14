import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestFormComponent } from './view-request-form.component';

describe('ViewRequestFormComponent', () => {
  let component: ViewRequestFormComponent;
  let fixture: ComponentFixture<ViewRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRequestFormComponent]
    });
    fixture = TestBed.createComponent(ViewRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
