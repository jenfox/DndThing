import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellHeaderComponent } from './spell-header.component';

describe('SpellHeaderComponent', () => {
  let component: SpellHeaderComponent;
  let fixture: ComponentFixture<SpellHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
