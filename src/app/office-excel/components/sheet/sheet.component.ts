import { Component, OnInit } from '@angular/core';

import { Point } from '../../../common/interface/point';

/**
 * excel 的一页
 */
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  private startPoint: Point;
  private endPoint: Point;

  private horizontalCount: number;
  private verticalCount: number;

  constructor() { }

  ngOnInit() {
    this.startPoint = { x: 0, y: 0 };
    this.endPoint = { x: 0, y: 0 };
    this.horizontalCount = 100;
    this.verticalCount = 100;
  }

}
