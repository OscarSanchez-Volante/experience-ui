import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformer-collapse',
  templateUrl: './transformer-collapse.component.html',
  styleUrls: ['./transformer-collapse.component.scss']
})
export class TransformerCollapseComponent implements OnInit {
  accordianData: {
    id: number; 
   
    notes: { head: string; points: string[]; }[];
  }[];
  @Input("data") data: any;
  @Input("data1") data1: any;
  @Input("data2") data2: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
