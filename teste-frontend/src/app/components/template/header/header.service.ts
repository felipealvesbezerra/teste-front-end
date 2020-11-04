import { headerData } from './header-data-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerData = new BehaviorSubject<headerData>({
    title: 'Início',
    icon: 'home',
    routeUrl: null,
  });

  constructor() {}

  get headerData(): headerData {
    return this._headerData.value;
  }

  set headerData(headerData: headerData) {
    this._headerData.next(headerData);
  }
}
