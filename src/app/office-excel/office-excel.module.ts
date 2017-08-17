import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeExcelRoutingModule } from './office-excel-routing.module';
import { SheetComponent } from './components/sheet/sheet.component';
import { ExcelCellComponent } from './components/excel-cell/excel-cell.component';

@NgModule({
  imports: [
    CommonModule,
    OfficeExcelRoutingModule
  ],
  declarations: [
    SheetComponent,
    ExcelCellComponent
  ],
  exports: [
    SheetComponent,
    ExcelCellComponent,
  ]
})
export class OfficeExcelModule { }
