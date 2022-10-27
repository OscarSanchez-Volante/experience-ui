import { Output, EventEmitter ,Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-timeline-bar',
  templateUrl: './timeline-bar.component.html',
  styleUrls: ['./timeline-bar.component.scss']
})
export class TimelineBarComponent implements OnInit {

  @Input() data;
  @Input() active;
  @Output() newItemEvent = new EventEmitter<any>();

 
  constructor() { }
  
  ngOnInit(): void {
  }
  selectActive(index){
    
   this.active=this.data[index].name;
   this.newItemEvent.emit(this.data[index]);
   this.data.forEach(element => {
     if(element.name==this.active){
        element.status="pending";
     }
     else{
        element.status="initial";
     }
     
   });
   
  }
  
}
