import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapasDetailsComponent } from './tapas-details.component';

describe('TapasDetailsComponent', () => {
  let component: TapasDetailsComponent;
  let fixture: ComponentFixture<TapasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
