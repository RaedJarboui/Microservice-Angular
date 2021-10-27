import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAeroComponent } from './add-aero.component';

describe('AddAeroComponent', () => {
  let component: AddAeroComponent;
  let fixture: ComponentFixture<AddAeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
