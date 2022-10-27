import { BehaviorSubject } from 'rxjs';
import { Injectable,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {
  selectService = new EventEmitter();
  constructor() { }


serviceSelected()
{

  setTimeout(()=>{this.selectService.emit()},200);
}


}
