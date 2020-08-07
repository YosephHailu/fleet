import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRegistrationComponent } from './vehicle-registration.component';

describe('VehicleRegistrationComponent', () => {
  let component: VehicleRegistrationComponent;
  let fixture: ComponentFixture<VehicleRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
