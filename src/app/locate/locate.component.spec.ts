import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateComponent } from './locate.component';

describe('LocateComponent', () => {
  let component: LocateComponent;
  let fixture: ComponentFixture<LocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
