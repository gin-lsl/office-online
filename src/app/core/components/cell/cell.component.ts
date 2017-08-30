import { Component, OnInit, Input, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';
import { IPoint, GlobalFocusServiceService, IFocusSubject, FocusSubjectTypeEnum } from '../../';

/**
 * 基础方格组件
 */
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @HostBinding('style.height.px') protected height = 30;

  @HostBinding('style.width.px') protected width = 70;

  @HostBinding('class.selected') protected isSelected = false;

  @HostBinding('class.focus') protected isFocus = false;

  @Output() protected focusEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected _globalFocusServiceService: GlobalFocusServiceService,
  ) {
  }

  ngOnInit() {
    this._globalFocusServiceService
      .focusSubject$()
      .filter((_: IFocusSubject) => _.type === FocusSubjectTypeEnum.FromSheetCell)
      .subscribe((_: IFocusSubject) => {
        console.log(_)
      })
  }

  @HostListener('mousedown')
  protected handleFocus(): void {
    this.isFocus = !this.isFocus;
    this._globalFocusServiceService.emitFocusChange({ row: 0, column: 0 })
  }

}
