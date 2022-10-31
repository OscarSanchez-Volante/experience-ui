import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ops-header',
  templateUrl: './ops-header.component.html',
  styleUrls: ['./ops-header.component.scss']
})
export class OpsHeaderComponent implements OnInit {
  public currentUrl;
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  constructor(private router: Router ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;

  }
}
