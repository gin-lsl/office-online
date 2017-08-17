import { Component, OnInit, EventEmitter, Output, Input, HostListener } from '@angular/core';
import { CellComponent } from "../../../common";
import { ISite } from '../../../common/interface/ISite';

@Component({
  selector: 'app-excel-cell',
  templateUrl: './excel-cell.component.html',
  styleUrls: ['./excel-cell.component.css']
})
export class ExcelCellComponent extends CellComponent implements OnInit {

  @Input() private indexRow: number = 0;

  @Input() private indexColumn: number = 0;

  @Output() protected focusEvent: EventEmitter<ISite> = new EventEmitter<ISite>();

  ngOnInit() {
    this.height = 20;
    this.width = 73;
  }

  @HostListener('mousedown')
  handleFocus(): void {
    this.isFocus = !this.isFocus;
    this._globalFocusServiceService.emitFocusChange({ row: this.indexRow, column: this.indexColumn })
  }

}
