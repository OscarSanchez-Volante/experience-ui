import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselSmallcardServiceService {
  carouselSmallcard = new EventEmitter();
  selectServiceC = new EventEmitter();

carddet:any;
  constructor() { }
  serviceSelectedC()
{

  setTimeout(()=>{this.selectServiceC.emit()},200);
}
}
