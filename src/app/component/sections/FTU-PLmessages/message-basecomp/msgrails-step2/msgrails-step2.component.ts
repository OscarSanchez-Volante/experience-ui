import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-msgrails-step2',
  templateUrl: './msgrails-step2.component.html',
  styleUrls: ['./msgrails-step2.component.scss']
})
export class MsgrailsStep2Component implements OnInit {

  public orderId=Math.floor(Date.now()/1000)
  public selected:any={"title":sessionStorage.getItem('selectedAddOn')};

  public length;
  public today = new Date();
  public title=sessionStorage.getItem('selectedAddOn')
  public active:string;
  Title=[{
    "name":"Selected"
  }]
  
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
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  @Input() count:number=3;
  
  constructor(private router:Router) { 
    
    this.active = this.router.url;
    var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));
    this.length=storedArray.length;

  }

  ngOnInit() {
   if(this.title=='Transformers'){
    this.accordianData = [
      {
        id: 1,
        header: "SWIFT ISO 20022 (CBPR+) to SWIFT MT Messages",
        color:"#d9eed1",
        transaction: "Selected, Input Provided",
        content: "About SEPA Instant Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta…",
       notes:[{
         head:"Supported Transformations",
         points:['camt.029.001.09 ➔ MT196',
          'camt.029.001.09 ➔ MT296',
          'camt.054.001.08 ➔ MT900',
          'camt.054.001.08 ➔ MT910',
          'camt.056.001.08 ➔ MT192',
          'camt.056.001.08 ➔ MT292',
          'camt.057.001.06 ➔ MT210',
          'pacs.002.001.10 ➔ MT199',
          'pacs.002.001.10 ➔ MT299',
          'pacs.004.001.09 ➔ MT103',
          'pacs.004.001.09 ➔ MT202',
          'pacs.008.001.08 ➔ MT103',
          'pacs.008.001.08STP ➔ MT103',
          'pacs.009.001.08 ➔ MT202',
          'pacs.009.001.08COV ➔ MT202COV' ]
       }],
  
      },
      {
        id: 2,
        header: "SWIFT MT to SWIFT ISO 20022 (CBPR+) Messages",
        color:"#facdcf",
        transaction: "Selected, Input Needed",
        content: "About SEPA Instant Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta…",
        notes:[{
          head:"Supported Transformations",
          points:['camt.029.001.09 ➔ MT196',
           'camt.029.001.09 ➔ MT296',
           'camt.054.001.08 ➔ MT900',
           'camt.054.001.08 ➔ MT910',
           'camt.056.001.08 ➔ MT192',
           'camt.056.001.08 ➔ MT292',
           'camt.057.001.06 ➔ MT210',
           'pacs.002.001.10 ➔ MT199',
           'pacs.002.001.10 ➔ MT299',
           'pacs.004.001.09 ➔ MT103',
           'pacs.004.001.09 ➔ MT202',
           'pacs.008.001.08 ➔ MT103',
           'pacs.008.001.08STP ➔ MT103',
           'pacs.009.001.08 ➔ MT202',
           'pacs.009.001.08COV ➔ MT202COV' ]
        }],
      }   
    ];
  }
  else if(this.title=='Message Creators'){
    this.accordianData = [
      {
        id: 1,
        header: "BATHNET",
        color:"#d9eed1",
        transaction: "Selected, Input Provided",
        content: "About FED-WIRE Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Duis mollis. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.", 
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
        header: "CHAPS",
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
        header: "EURO1/STEP1",
      
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
        id: 4,
        header: "FEDNOW",
      
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
        header: "LYNX ISO",
      
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
  }
  else if(this.title =='Validators'){
    this.accordianData = [
      {
        id: 1,
        header: "BATHNET",
        color:"#d9eed1",
      
        transaction: "Selected, Input Provided",
        content: "About FED-WIRE Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Duis mollis. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.", 
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
        header: "CHAPS",
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
        header: "EURO1/STEP1",
      
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
        id: 4,
        header: "FEDNOW",
      
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
        header: "LYNX ISO",
      
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
   }
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
  
  }
  

 
}
