import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  public mainPage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  currentValue: boolean = true;
  constructor() { }

  public switchPages(): void {
    this.currentValue = !this.currentValue;
    this.mainPage.next(this.currentValue);
  }
}
