import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() private width: number = 700;
  @Input() private height: number = 180;
  @Input() private isSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mousedown')
  handleClick(): void {
    this.isSelected = !this.isSelected
  }

  handleHeheClick(event) {
    console.log('heeh');
    event.preventDefault()
    event.stopPropagation()
    return false
  }

}
