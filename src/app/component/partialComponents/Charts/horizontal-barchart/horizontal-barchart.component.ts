import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-barchart',
  templateUrl: './horizontal-barchart.component.html',
  styleUrls: ['./horizontal-barchart.component.scss']
})
export class HorizontalBarchartComponent implements OnInit {
  @Input() optionsHorizontalstackbar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
