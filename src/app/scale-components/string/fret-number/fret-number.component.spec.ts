import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretNumberComponent } from './fret-number.component';

describe('FretNumberComponent', () => {
  let component: FretNumberComponent;
  let fixture: ComponentFixture<FretNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
