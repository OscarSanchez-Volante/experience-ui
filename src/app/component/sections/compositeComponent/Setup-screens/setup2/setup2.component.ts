import { Component, Input ,ElementRef} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { InteractionServiceService } from '@services/interaction-service.service';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';


@Component({
  selector: 'app-setup2',
  templateUrl: './setup2.component.html',
  styleUrls: ['./setup2.component.scss']
})
export class Setup2Component  {

  @Input() count:number=3;


  public active:string;
  public selected:any={"title":sessionStorage.getItem('selectedAddOn')};
  public selectedRails:any=[];
  public stepperCount:any=[];
  public valueneeded;
  constructor(private router:Router,private activeRouter:ActivatedRoute,private InteractionService:InteractionServiceService, private readonly elementRef: ElementRef, private jsonhttp:JsonHttpService) {

    this.active = this.router.url;
    this.valueneeded= this.selected.title;
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {

      }

    });
    this.activeRouter.queryParams.subscribe((params:any)=>{
      this.selected.title=params.selectedAddon;
    })
  }
  ngOnInit(): void {
    this.activeRouter
    .queryParams
    .subscribe(params => {
      this.selected.title=params.selectedAddon;
      sessionStorage.setItem("sidebarVal",this.selected.title)
      switch (this.selected.title) {
        case "Payment Rails":
          this.selected['description']="Select and configure the payment rails that your institution would like to review and evaluate on the Volante VolPay service. You only need to configure one rail to get started, and can configure additional rails later as needed."
          break;
           case "Message Constructors & Validators":
            case "Message Transformers":
          case "Message Creators":


            this.selected['description']="Select and configure the message creators that your institution would like to review and evaluaite ont he Volante VolPay service. You only need to configure one rail to get started, and can configure additional rails later as needed."
            break;
        default:
          break;
      }

    })
    var storedArray = JSON.parse(sessionStorage.getItem("selectedRails"));

    if(storedArray){
      let len=this.accordianData.length;
      for (let i = 0; i < len; i++) {
        var index = storedArray.indexOf(this.accordianData[i].id);
        if(index!==-1){
          this.accordianData[i]['selected']=true;
          this.selectedRails.push(this.accordianData[i].id);
        }
      }
    }

  }

  selectRails(value) {
    var index = this.selectedRails.indexOf(value);
    if (index === -1) {
      this.selectedRails.push(value);
    } else {
        this.selectedRails.splice(index, 1);
    }
        this.InteractionService.serviceSelected();
   sessionStorage.setItem("selectedRails", JSON.stringify(this.selectedRails));
	}
  stepper(value) {
    var index = this.stepperCount.indexOf(value);
    if (index === -1) {
      this.stepperCount.push(value);
    } else {
        this.stepperCount.splice(index, 1);
    }
        this.InteractionService.serviceSelected();
	}

  public accordianData = [
    {
      "id": 1,
       "header": "TCH-RTP",
      "display":true,
      "content": " About TCH-RTP Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui…" ,


    "notes":[{
       "head":"Functional Overview",
       "points":["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","  Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. ","Aenean eu leo quam. ","Pellentesque ornare sem lacinia quam venenatis vestibulum. ","Aenean lacinia bibendum nulla sed consectetur." ]
     },
    {
      "head":"Technical Overview",
      "points":["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","  Aenean eu leo quam. ","Pellentesque ornare sem lacinia quam venenatis vestibulum.","Aenean lacinia bibendum nulla sed consectetur." ]
    }]

    },
    {
      "id": 2,
      "header": " SEPA Instant",
      "color":"#facdcf",
      "display":true,
      "transaction": "Selected, Input Needed",
      "content": "About SEPA Instant Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta…",
      "notes":[{
        "head":"Functional Overview",
        "points":["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
      },
     {
       "head":"Technical Overview",
       "points":["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
     }]
    },
    {
      "id": 3,
      "header": "FED-WIRE",
      "color":"#d9eed1",
      "display":true,
      "transaction": "Selected, Input Provided",
      "content": "About FED-WIRE Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Duis mollis. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.",
      "notes":[{
        "head":"Functional Overview",
        "points":["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
      },
     {
       "head":"Technical Overview",
       "points":["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
     }]
    },
    {
      "id": 4,
      "header": "SWIFT",
      "display":true,
      "content": " About SWIFT Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui…" ,
       "notes":[{
        "head":"Functional Overview",
        "points":["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
      },
     {
       "head":"Technical Overview",
       "points":["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
     }]

    },
    {
      "id": 5,
      "header": "PAYMENT HUB",
      "display":true,
      "content": " About Payment Hub Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui…" ,
    "notes":[{
       "head":"Functional Overview",
       "points":["Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
     },
    {
      "head":"Technical Overview",
      "points":["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Aenean eu leo quam.","Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." ]
    }]
    }

  ];


}
