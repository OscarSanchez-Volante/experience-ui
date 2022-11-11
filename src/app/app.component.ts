import { Component } from '@angular/core';
import { GlobalVariables } from './utilities/globals-variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing';

  constructor(private globalvariables:GlobalVariables){
    if(localStorage.getItem("userdata")==undefined)
      return;
    this.globalvariables.currentUser=JSON.parse(localStorage.getItem("userdata"));
    console.log(this.globalvariables.currentUser);
  }
}
