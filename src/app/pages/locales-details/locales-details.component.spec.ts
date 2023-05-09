import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalesDetailsComponent } from './locales-details.component';

describe('LocalesDetailsComponent', () => {
  let component: LocalesDetailsComponent;
  let fixture: ComponentFixture<LocalesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
