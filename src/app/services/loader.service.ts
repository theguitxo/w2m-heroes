import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class LoadingService {
  loading = false;

  private _loading: Subject<boolean> = new Subject();

  /**
   * Returns an observable to indicate if is loading or not
   */
  isLoading(): Observable<boolean> {
    return this._loading.asObservable();
  }

  /**
   * Sets the loading to true to show the spinner
   */
  showLoading(): void {
    this._loading.next(true);
  }

  /**
   * Sets the loading to false to hide the spinner
   */
  hideLoading(): void {
    this._loading.next(false);
  }
}
