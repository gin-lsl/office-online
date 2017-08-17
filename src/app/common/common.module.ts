import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { CellComponent } from "./components/cell/cell.component";

import { GlobalFocusServiceService } from './services/global-focus-service.service';

@NgModule({
  imports: [
    AngularCommonModule
  ],
  declarations: [
    CellComponent
  ],
  exports: [
    CellComponent,
  ],
  providers: [
    GlobalFocusServiceService
  ]
})
export class CommonModule { }
