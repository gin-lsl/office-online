import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelCellComponent } from './excel-cell.component';

describe('ExcelCellComponent', () => {
  let component: ExcelCellComponent;
  let fixture: ComponentFixture<ExcelCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
