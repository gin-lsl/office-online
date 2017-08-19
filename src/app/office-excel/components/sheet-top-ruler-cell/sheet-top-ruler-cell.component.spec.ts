import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetTopRulerCellComponent } from './sheet-top-ruler-cell.component';

describe('SheetTopRulerCellComponent', () => {
  let component: SheetTopRulerCellComponent;
  let fixture: ComponentFixture<SheetTopRulerCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetTopRulerCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetTopRulerCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
