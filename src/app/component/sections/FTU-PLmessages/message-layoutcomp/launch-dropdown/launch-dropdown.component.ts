import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-launch-dropdown',
  templateUrl: './launch-dropdown.component.html',
  styleUrls: ['./launch-dropdown.component.scss']
})
export class LaunchDropdownComponent implements OnInit {
  @Input() data;
  @Input() active;
 
  constructor(private router:Router,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
  }
  nextroute(value:any){
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);

  }


}
