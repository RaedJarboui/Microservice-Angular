import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonnelComponent } from './update-personnel.component';

describe('UpdatePersonnelComponent', () => {
  let component: UpdatePersonnelComponent;
  let fixture: ComponentFixture<UpdatePersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
