import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet-top-ruler',
  templateUrl: './sheet-top-ruler.component.html',
  styleUrls: ['./sheet-top-ruler.component.css']
})
export class SheetTopRulerComponent implements OnInit {

  private topRulerCount: number;
  private topRulerList: any[];

  ngOnInit() {
    this.topRulerCount = 10;
    this.topRulerList = new Array(this.topRulerCount);
  }

}
