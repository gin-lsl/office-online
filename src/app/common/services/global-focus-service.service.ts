import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable()
export class GlobalFocusServiceService {

  private _changeFocusSource$: Subject<any> = new Subject<any>();

  public changeFocus$: Observable<any> = this._changeFocusSource$.asObservable();

  public emitFocusChange(componentInfo: any): void {
    this._changeFocusSource$.next(componentInfo);
  }

  constructor() { }

}
