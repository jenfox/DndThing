import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingThrowsComponent } from './saving-throws.component';

describe('SavingThrowsComponent', () => {
  let component: SavingThrowsComponent;
  let fixture: ComponentFixture<SavingThrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingThrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingThrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
