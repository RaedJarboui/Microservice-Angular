import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAeroComponent } from './list-aero.component';

describe('ListAeroComponent', () => {
  let component: ListAeroComponent;
  let fixture: ComponentFixture<ListAeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
