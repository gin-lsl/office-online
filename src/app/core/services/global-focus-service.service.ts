import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable()
export class GlobalFocusServiceService {

  private _changeFocusSource$: Subject<any> = new Subject<any>();

  private changeFocus$: Observable<any> = this._changeFocusSource$.asObservable() as Observable<any>;

  /**
   * 订阅主题
   */
  public focusSubject$(): Observable<any> {
    return this.changeFocus$;
  }

  /**
   * 触发焦点改变
   *
   * @param componentInfo 组件信息
   */
  public emitFocusChange(componentInfo: any): void {
    this._changeFocusSource$.next(componentInfo);
  }

  constructor() { }

}
