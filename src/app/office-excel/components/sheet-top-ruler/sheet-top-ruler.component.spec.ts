import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetTopRulerComponent } from './sheet-top-ruler.component';

describe('SheetTopRulerComponent', () => {
  let component: SheetTopRulerComponent;
  let fixture: ComponentFixture<SheetTopRulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetTopRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetTopRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
