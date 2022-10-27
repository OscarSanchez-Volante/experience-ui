import { Component, OnInit } from '@angular/core';
import { SelectValue } from '@inputs/volmain-input.service';

@Component({
  selector: 'app-vol-mainpage',
  templateUrl: './vol-mainpage.component.html',
  styleUrls: ['./vol-mainpage.component.scss']
})
export class VolMainpageComponent implements OnInit {
  SelectValue: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
