import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeWordRoutingModule } from './office-word-routing.module';
import { DocumentComponent } from './components/document/document.component';

@NgModule({
  imports: [
    CommonModule,
    OfficeWordRoutingModule
  ],
  declarations: [
    DocumentComponent
  ],
  exports: [
    DocumentComponent,
  ]
})
export class OfficeWordModule { }
