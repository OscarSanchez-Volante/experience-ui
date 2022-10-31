import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import { Observable} from 'rxjs';
import {Router } from '@angular/router';
@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.component.html',
  styleUrls: ['./service-modal.component.scss']
})
export class ServiceModalComponent implements OnInit {
  @Output() someEvent: EventEmitter<any> = new EventEmitter<any>(); 
  public currentUrl:string|number;
  @Input() events: Observable<void>;

 constructor(private router:Router) { }
 modalEmit(){
  this.someEvent.emit();
 }



  ngOnInit() {
   this.currentUrl = this.router.url;

  }


  
}
