import { Component, OnInit, HostBinding } from '@angular/core';

import { IPoint, ISite, IFocusSubject, GlobalFocusServiceService, FocusSubjectTypeEnum } from '../../../core';

/**
 * excel 的一页
 */
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  private startPoint: IPoint;
  private endPoint: IPoint;

  private horizontalCount: number;
  private verticalCount: number;

  private excelCell2D: any[][] = [[]];

  private inFocusExcelCellSite: ISite = { row: -1, column: -1 };

  constructor(
    private _globalFocusServiceService: GlobalFocusServiceService
  ) {
  }

  ngOnInit() {
    this.horizontalCount = 10;
    this.verticalCount = 40;
    this.excelCell2D = new Array(this.verticalCount).fill(new Array(this.horizontalCount));
    this.startPoint = { x: 0, y: 0 };
    this.endPoint = { x: 0, y: 0 };
    this.horizontalCount = 100;
    this.verticalCount = 100;
    this._globalFocusServiceService
      .focusSubject$()
      .subscribe((_site: ISite) => {
        this.inFocusExcelCellSite = _site;
        this._globalFocusServiceService.emitFocusChange({
          type: FocusSubjectTypeEnum.FromSheetCell
        });
      });
  }

  handleExcelCellFocus(some: any): void {
    console.log('呵呵');
    console.log(some);
  }

}
