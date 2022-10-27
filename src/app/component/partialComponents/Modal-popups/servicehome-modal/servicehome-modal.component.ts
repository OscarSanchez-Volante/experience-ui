import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicehome-modal',
  templateUrl: './servicehome-modal.component.html',
  styleUrls: ['./servicehome-modal.component.scss']
})
export class ServicehomeModalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  clicknext(){
		this.router.navigate(['ftuPaaS']);
	  
	  }
}
