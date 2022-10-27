import { Component, Input, OnInit } from '@angular/core';
import { treeviewcreator } from '@inputs/creator';
import { treeInputtransformer } from '@inputs/transformer-api-transformer.service';
import { treeInputvalidators } from '@inputs/treeview-inputs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-transformer-api',
  templateUrl: './transformer-api.component.html',
  styleUrls: ['./transformer-api.component.scss']
})
export class TransformerAPIComponent implements OnInit {
  @Input() data;
  @Input() data1;
  @Input() data2;
  @Input() active;
  treeView: any;
  treeView1: any;
  treeView2: any;

  constructor(private router:Router,private route:ActivatedRoute) {

    this.active = this.router.url;


  }
  creator:Array <any>=treeviewcreator;
  transformer:Array <any>=treeInputtransformer;
  validators:Array <any>=treeInputvalidators;






  ngOnInit(): void {

   this.treeView = this.creator
   this.treeView1 = this.transformer
   this.treeView2 = this.validators

   document.getElementById('1').classList.add('show');

  }

  nextroute(value:any){
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
    this.router.navigate(['/ftuMesssageAPI/'+value.value]);
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

