import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stack-barchart',
  templateUrl: './stack-barchart.component.html',
  styleUrls: ['./stack-barchart.component.scss']
})
export class StackBarchartComponent implements OnInit {

  constructor() { }
  @Input() optionsstackbar: any;
  @Input() optionsmidbar: any;

  
  ngOnInit(): void {
  }

}
