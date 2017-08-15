import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { CellComponent } from "./components/cell/cell.component";

@NgModule({
  imports: [
    AngularCommonModule
  ],
  declarations: [
    CellComponent
  ],
  exports: [
    CellComponent,
  ]
})
export class CommonModule { }
