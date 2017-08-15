import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeExcelRoutingModule } from './office-excel-routing.module';
import { SheetComponent } from '../../src/app/office-excel/sheet/sheet.component';

@NgModule({
  imports: [
    CommonModule,
    OfficeExcelRoutingModule
  ],
  declarations: [SheetComponent]
})
export class OfficeExcelModule { }
