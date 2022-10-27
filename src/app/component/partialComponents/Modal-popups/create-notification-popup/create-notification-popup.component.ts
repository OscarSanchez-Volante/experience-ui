import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-notification-popup',
  templateUrl: './create-notification-popup.component.html',
  styleUrls: ['./create-notification-popup.component.scss']
})
export class CreateNotificationPopupComponent implements OnInit {
  value: string;
  constructor() { }

  ngOnInit(): void {
  }
  save()
  {
    if (sessionStorage.getItem("autosave")) {
      this.value = sessionStorage.getItem("autosave");
    }
  }
}
