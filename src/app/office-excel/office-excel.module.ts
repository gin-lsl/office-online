import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeExcelRoutingModule } from './office-excel-routing.module';
import { SheetComponent } from './components/sheet/sheet.component';
import { ExcelCellComponent } from './components/excel-cell/excel-cell.component';
import { SheetTopRulerComponent } from './components/sheet-top-ruler/sheet-top-ruler.component';
import { SheetLeftRulerComponent } from './components/sheet-left-ruler/sheet-left-ruler.component';
import { SheetContentComponent } from './components/sheet-content/sheet-content.component';
import { SheetTopRulerCellComponent } from './components/sheet-top-ruler-cell/sheet-top-ruler-cell.component';
import { SheetLeftRulerCellComponent } from './components/sheet-left-ruler-cell/sheet-left-ruler-cell.component';

@NgModule({
  imports: [
    CommonModule,
    OfficeExcelRoutingModule
  ],
  declarations: [
    SheetComponent,
    ExcelCellComponent,
    SheetTopRulerComponent,
    SheetLeftRulerComponent,
    SheetContentComponent,
    SheetTopRulerCellComponent,
    SheetLeftRulerCellComponent
  ],
  exports: [
    SheetComponent,
    ExcelCellComponent,
  ]
})
export class OfficeExcelModule { }
