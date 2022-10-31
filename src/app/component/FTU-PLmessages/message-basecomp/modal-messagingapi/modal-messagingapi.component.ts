import { Component, OnInit, EventEmitter,Input ,Output} from '@angular/core';
import {Router } from '@angular/router';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

@Component({
  selector: 'app-modal-messagingapi',
  templateUrl: './modal-messagingapi.component.html',
  styleUrls: ['./modal-messagingapi.component.scss'] 
})
export class ModalMessagingapiComponent implements OnInit {
  public currentUrl:string|number;
  @Output() someEvent: EventEmitter<string|number> = new EventEmitter<string|number>(); 
  public carouselcardData ;
ngOnInit() {
  this.jsonhttp.getModalMessagingpopup("assets/data/admin.json").subscribe(data => {
    this.carouselcardData = data['carouselModakMessagingData']
   
  })


 this.currentUrl = this.router.url;

}
 constructor(private router:Router, private jsonhttp:JsonHttpService) { }

 modalEmit(){
  this.someEvent.emit();
 }
 

   

  
}
