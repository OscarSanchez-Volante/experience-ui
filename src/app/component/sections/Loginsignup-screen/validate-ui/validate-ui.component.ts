import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-ui',
  templateUrl: './validate-ui.component.html',
  styleUrls: ['./validate-ui.component.scss']
})
export class ValidateUIComponent implements OnInit {

  constructor() { }
  public data={
    "image":"40.png",
    "title":"Thanks for your account request",
    "text":"Please check your email to validation and continue the account creation process.",
    "buttonName":"RETURN TO LOGIN",
    "link":"login0.1",
    "type":"validate"
  }

  ngOnInit(): void {
  }

}
