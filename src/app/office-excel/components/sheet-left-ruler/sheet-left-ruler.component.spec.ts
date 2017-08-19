import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetLeftRulerComponent } from './sheet-left-ruler.component';

describe('SheetLeftRulerComponent', () => {
  let component: SheetLeftRulerComponent;
  let fixture: ComponentFixture<SheetLeftRulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetLeftRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetLeftRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
