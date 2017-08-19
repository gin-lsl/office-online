import { Component, OnInit, Input, HostListener } from '@angular/core';
import { CellComponent } from '../../../common';
import { ISite } from '../../../common';

@Component({
  selector: 'app-sheet-top-ruler-cell',
  templateUrl: './sheet-top-ruler-cell.component.html',
  styleUrls: ['./sheet-top-ruler-cell.component.css']
})
export class SheetTopRulerCellComponent extends CellComponent implements OnInit {

  @Input() private indexColumn: number = 0;

  ngOnInit() {
    this.height = 20;
    this.width = 73;
  }

  @HostListener('mousedown')
  protected handleFocus(): void {
    this._globalFocusServiceService.emitFocusChange({ type: 'sheetTopRuler', site: { row: 0, column: this.indexColumn } } as { type: string, site: ISite })
  }

}
