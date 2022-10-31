import { Component, Input, OnInit } from '@angular/core';
import {partoneInterface} from '../../../../interface/basecomponent-interface'
import { Router } from '@angular/router';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

@Component({
  selector: 'app-transformer-api',
  templateUrl: './transformer-api.component.html',
  styleUrls: ['./transformer-api.component.scss']
})
export class TransformerAPIComponent implements OnInit {

  treeView: partoneInterface[];
  treeView1: partoneInterface[];
  treeView2: partoneInterface[];

  constructor(private router:Router, private jsonhttp:JsonHttpService) { 

  }
 ngOnInit(): void {
    this.jsonhttp.getmessagingApis("assets/data/admin.json").subscribe(data => {
      this.treeView = data['creator'],
      this.treeView1 = data['transformer'],
      this.treeView2 = data['validators']
    })
  

   document.getElementById('1').classList.add('show');
   
  }
 
  nextroute(event: Event): void {
    this.router.navigate(['/ftu-messsage-api/'+(event.target as HTMLInputElement).value]);
   
  }
  
  collapse(type:any){
    let k = document.getElementById(type).classList.contains('show');
    const coll = document.getElementsByClassName("collapseMOde");
      for (let i=1 ; i <= coll.length; i++) {    
      document.getElementById(i.toString()).classList.remove('show');
    }
    if(!k){    
      document.getElementById(type).classList.add('show');
    }
          
  }
}

