import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  progress = 40;
  progressColor = '#003B7C'
  remainingProgressColor = '#44ab1a';
  constructor() { }

  ngOnInit(): void {
 
  }

}
