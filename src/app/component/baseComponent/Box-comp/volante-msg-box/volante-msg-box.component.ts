import { Component, OnInit , Input } from '@angular/core';
import {msgboxInterface} from '../../../../interface/basecomponent-interface'
@Component({
  selector: 'app-volante-msg-box',
  templateUrl: './volante-msg-box.component.html',
  styleUrls: ['./volante-msg-box.component.scss']
})
export class VolanteMsgBoxComponent implements OnInit {
 @Input() data:msgboxInterface;
  constructor() { }
  
  ngOnInit() {
  }

}
