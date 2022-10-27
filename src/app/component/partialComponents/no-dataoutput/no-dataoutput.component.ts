import { Component, OnInit,Input} from '@angular/core';
import { Contain } from 'src/app/interface/nodata-interface';
import { Router} from '@angular/router';

@Component({
  selector: 'app-no-dataoutput',
  templateUrl: './no-dataoutput.component.html',
  styleUrls: ['./no-dataoutput.component.scss']
})
export class NoDataoutputComponent implements OnInit {
@Input() contain: Contain;
public currentUrl;

constructor(private router: Router) { }
  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
}
