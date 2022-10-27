import { Component, OnInit } from '@angular/core';
import 'bootstrap';
@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent implements OnInit {
  public position : string = "bottom" ;
  tooltip: any;

  constructor() { }

  ngOnInit() {
   
  }
}
