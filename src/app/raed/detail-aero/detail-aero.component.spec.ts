import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAeroComponent } from './detail-aero.component';

describe('DetailAeroComponent', () => {
  let component: DetailAeroComponent;
  let fixture: ComponentFixture<DetailAeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
