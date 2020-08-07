import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchRegistrationComponent } from './dispatch-registration.component';

describe('DispatchRegistrationComponent', () => {
  let component: DispatchRegistrationComponent;
  let fixture: ComponentFixture<DispatchRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
