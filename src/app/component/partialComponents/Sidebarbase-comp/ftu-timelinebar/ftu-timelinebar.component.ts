import { Output, EventEmitter ,Component, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ftu-timelinebar',
  templateUrl: './ftu-timelinebar.component.html',
  styleUrls: ['./ftu-timelinebar.component.scss']
})
export class FtuTimelinebarComponent implements OnInit {
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
