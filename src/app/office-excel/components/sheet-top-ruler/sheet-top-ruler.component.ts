import { Component, OnInit } from '@angular/core';

import { ISite, GlobalFocusServiceService } from '../../../core';

@Component({
  selector: 'app-sheet-top-ruler',
  templateUrl: './sheet-top-ruler.component.html',
  styleUrls: ['./sheet-top-ruler.component.css']
})
export class SheetTopRulerComponent implements OnInit {

  private topRulerCount: number;
  private topRulerList: any[];
  private startIndex = 0;
  private endIndex = 0;

  constructor(
    private _globalFocusServiceService: GlobalFocusServiceService
  ) {
    this._globalFocusServiceService
      .focusSubject$()
      .subscribe(x => { console.log(x); });
      // .subscribe((_: { type: string, site: ISite }) => {
      //   console.log(_.site);
      // })
  }

  ngOnInit() {
    this.topRulerCount = 30;
    this.topRulerList = new Array(this.topRulerCount);
    this.startIndex = 5;
    this.endIndex = 25;
  }

}
