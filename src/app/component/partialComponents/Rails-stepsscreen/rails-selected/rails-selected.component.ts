import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

@Component({
  selector: 'app-rails-selected',
  templateUrl: './rails-selected.component.html',
  styleUrls: ['./rails-selected.component.scss']
})
export class RailsSelectedComponent implements OnInit {

  public orderId=Math.floor(Date.now()/1000)
  public selected:any={"title":sessionStorage.getItem('selectedAddOn')};
  public accordianDat1a :any=[];
  public valueneeded;

  public length;
  public today = new Date();
  public title=sessionStorage.getItem('selectedAddOn')
  public active:string;
  Title=[{
    "name":"Selected"
  }]
  public paasaccordianData:any;
 
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  @Input() count:number=3;
    
  public accordianData = [
    {
      id: 1,
      header: "TCH-RTP ",
      color:"#d9eed1",
      transaction: "Selected, Input Provided",
      content: "About TCH-RTP Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Duis mollis. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.", 
   notes:[{
       head:"Functional Overview",
       points:["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","  Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ","Aenean eu leo quam. ","Pellentesque ornare sem lacinia quam venenatis vestibulum. ","Aenean lacinia bibendum nulla sed consectetur." ]
     },
    {
      head:"Technical Overview",
      points:["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","  Aenean eu leo quam. ","Pellentesque ornare sem lacinia quam venenatis vestibulum.","Aenean lacinia bibendum nulla sed consectetur." ],
    }],

    },
    {
      id: 2,
      header: " SEPA Instant",
      color:"#facdcf",
      transaction: "Selected, Input Needed",
      content: "About SEPA Instant Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta…",
      notes:[{
        head:"Functional Overview",
        points:["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
      },
     {
       head:"Technical Overview",
       points:["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ],
     }],
    },
    {
      id: 3,
      header: "FED-WIRE ",
      content: " About FED-WIRE Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui…" ,
      notes:[{
        head:"Functional Overview",
        points:["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
      },
     {
       head:"Technical Overview",
       points:["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ],
     }],
    },
    {
      id: 4,
      header: "SWIFT",
      content: " About SWIFT Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui…" ,
      notes:[{
        head:"Functional Overview",
        points:["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
      },
     {
       head:"Technical Overview",
       points:["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ],
     }],

    },
    {
      id: 5,
      header: "PAYMENT HUB",
      content: " About Payment Hub Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui…" ,
    notes:[{
       head:"Functional Overview",
       points:["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
     },
    {
      head:"Technical Overview",
      points:["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ],
    }],
    },

  ];
  constructor(private router:Router,private jsonhttp:JsonHttpService) { 
    
    this.active = this.router.url;
    var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
    this.length=storedArray.length;

  }

  ngOnInit() {

   this.valueneeded= this.selected.title;
  var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
    this.length=storedArray.length;
    let len=this.accordianData.length;
    for (let i = 0; i < len; i++) {
      var index = storedArray.indexOf(this.accordianData[i].id);
      if(index!==-1){     
        this.accordianData[i]['display']=true;
        this.accordianData[i]['selected']=true;
      }
    }
  
  }}
