import { Output, EventEmitter ,Component, Input, OnInit  } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-timeline-tab',
  templateUrl: './timeline-tab.component.html',
  styleUrls: ['./timeline-tab.component.scss']
})
export class TimelineTabComponent implements OnInit {
  @Input() data;
  @Input() active;
  public currentUrl;
  @Output() newItemEvent = new EventEmitter<any>();
     showBtn=[false,false,false];
     public len :any;
  constructor(private router: Router) { }
  ngOnInit(): void {

    this.currentUrl = this.router.url;
   this.len= this.data.length;
  }
  selectActive(index){
    
   this.active=this.data[index].name;
   this.newItemEvent.emit(this.data[index]);   
  }
}
