import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantripsComponent } from './cantrips.component';

describe('CantripsComponent', () => {
  let component: CantripsComponent;
  let fixture: ComponentFixture<CantripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
