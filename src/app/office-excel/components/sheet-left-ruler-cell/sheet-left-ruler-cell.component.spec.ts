import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetLeftRulerCellComponent } from './sheet-left-ruler-cell.component';

describe('SheetLeftRulerCellComponent', () => {
  let component: SheetLeftRulerCellComponent;
  let fixture: ComponentFixture<SheetLeftRulerCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetLeftRulerCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetLeftRulerCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
