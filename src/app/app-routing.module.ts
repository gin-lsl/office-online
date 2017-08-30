import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SheetComponent } from './office-excel/components/sheet/sheet.component';
import { DocumentComponent } from './office-word/components/document/document.component';

const routes: Routes = [
  {
    path: 'excel', loadChildren: 'app/office-excel/office-excel.module#OfficeExcelModule'
  },
  {
    path: 'word', loadChildren: 'app/office-word/office-word.module#OfficeWordModule'
  },
  // { path: '', redirectTo: '/excel', pathMatch: 'full' },
  // { path: '**', redirectTo: '/excel' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
