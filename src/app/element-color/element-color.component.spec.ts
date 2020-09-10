import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementColorComponent } from './element-color.component';

describe('ElementColorComponent', () => {
  let component: ElementColorComponent;
  let fixture: ComponentFixture<ElementColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
