import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-ops-linechart',
  templateUrl: './ops-linechart.component.html',
  styleUrls: ['./ops-linechart.component.scss']
})
export class OpsLinechartComponent implements OnInit {
  @Input() optionsLinechart:any;

  constructor() { }

  ngOnInit(): void {
 
  }   
}
