import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAeroComponent } from './update-aero.component';

describe('UpdateAeroComponent', () => {
  let component: UpdateAeroComponent;
  let fixture: ComponentFixture<UpdateAeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
