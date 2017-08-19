import { Component, OnInit, Input, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';
import { IPoint } from '../../';
import { GlobalFocusServiceService } from '../../';

/**
 * 基础方格组件
 */
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @HostBinding('style.height.px') protected height: number = 30;

  @HostBinding('style.width.px') protected width: number = 70;

  @HostBinding('class.selected') protected isSelected: boolean = false;

  @HostBinding('class.focus') protected isFocus: boolean = false;

  @Output() protected focusEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected _globalFocusServiceService: GlobalFocusServiceService,
  ) {
  }

  ngOnInit() {
  }

  @HostListener('mousedown')
  protected handleFocus(): void {
    this.isFocus = !this.isFocus;
    this._globalFocusServiceService.emitFocusChange({ row: 0, column: 0 })
  }

}
