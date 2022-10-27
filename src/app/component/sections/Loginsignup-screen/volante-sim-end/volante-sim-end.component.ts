import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volante-sim-end',
  templateUrl: './volante-sim-end.component.html',
  styleUrls: ['./volante-sim-end.component.scss']
})
export class VolanteSimEndComponent implements OnInit {
  
  constructor() { }
  public data={
    "image":"32.png",
    "title":"Thankyou",
    "text":"Volante Technologies will contact you to complete your account setup. Login to track progress and access training materials to learn more.",
    "buttonName":"LOGIN",
    "link":"login0.1",
    "type":"sim-end"
  }
  ngOnInit(): void {
  }

}
