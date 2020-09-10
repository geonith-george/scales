import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleComponentComponent } from './scale-component.component';

describe('ScaleComponentComponent', () => {
  let component: ScaleComponentComponent;
  let fixture: ComponentFixture<ScaleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
