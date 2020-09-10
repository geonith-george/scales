import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretNoteComponent } from './fret-note.component';

describe('FretNoteComponent', () => {
  let component: FretNoteComponent;
  let fixture: ComponentFixture<FretNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
