import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CarouselSmallcardServiceService } from '@services/carousel-smallcard.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-carousel-smallcard1',
  templateUrl: './carousel-smallcard1.component.html',
  styleUrls: ['./carousel-smallcard1.component.scss']
})
export class CarouselSmallcard1Component implements OnInit {

  @Input()  data:any;
  @Output() onTFAEnabled = new EventEmitter();
  @Input('checkBoxType') checkBoxType:string;
  @Input('selectValue')  selectValue:any;

  public isReadMore = true


  showText() {
     this.isReadMore = !this.isReadMore
  }
  constructor(private CarouselSmallcardService:CarouselSmallcardServiceService, private router: Router) { }
  d(){

  }

  ngOnInit(): void {
  }

  invitescreen(){
      this.onTFAEnabled.emit();
    this.router.navigate(['gettingStarted5.0-invite-v2']);

    }

}


