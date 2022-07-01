import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHeader } from '../dtos/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerData = new BehaviorSubject<IHeader>({
    title: 'Início',
    icon: 'home',
    routeUrl: '/'
  })

  constructor() { }

  getHeaderData(): IHeader {
    return this.headerData.value;
  }

  setHeaderData(data: IHeader) {
    this.headerData.next(data)
  }
}
