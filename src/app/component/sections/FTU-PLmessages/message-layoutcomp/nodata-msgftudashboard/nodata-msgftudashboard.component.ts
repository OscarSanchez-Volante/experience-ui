import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';
import { containData1 } from '@inputs/Nodata-msgftuinputs';

@Component({
  selector: 'app-nodata-msgftudashboard',
  templateUrl: './nodata-msgftudashboard.component.html',
  styleUrls: ['./nodata-msgftudashboard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NodataMsgftudashboardComponent implements OnInit {



  containInput:Array <any>=containData1;
  @Input() active;
  data: any;
  constructor( ) { }


  ngOnInit(): void {
  }


  public tableHead2=[{
		"label": "Name",
		"fieldName": "Name"
	}, {
		"label": "Frequency",
		"fieldName": "Frequency"
	}, {
		"label": "Date ",
		"fieldName": "Date "
	},
  {
		"label": "Created By ",
		"fieldName": "CreatedBy"
	},
  {
		"label": "Expires ",
		"fieldName": "Expires"
	},  {
		"label": "Download",
		"fieldName": "Download"
	},];
	public contain = {
		image: "no-data-doc.png",
		title: "No Reports available",
		description: "Lorem Ipsum is simply dummy text.",
		buttonName : "ADD REPORT",
		route :""
	  }
    public containTop = {
      image: "l-chart-nodata.png",
      title: "No Data available",
      description: "Lorem Ipsum is simply",
      }
      public containMessage = {
        image: "l-chart-nodata.png",
        title: "No Data available",
        description: "Lorem Ipsum is simply",
        buttonName : "LAUNCH SANDBOX",
        route :""
        }
  public containcreator = {
      image: "img-no-data.png",
      title: "No Data available",
      description: "Lorem Ipsum is simply",
      buttonName : "LAUNCH SANDBOX",
      route :""
      }

        public containTransformer = {
          image: "img-no-data.png",
          title: "No Data available",
          description: "Lorem Ipsum is simply",
          buttonName : "LAUNCH SANDBOX",
          route :""
          }
public containValidator = {
    image: "img-no-data.png",
    title: "No Data available",
    description: "Lorem Ipsum is simply",
    buttonName : "LAUNCH SANDBOX",
    route :""
 }
 public containRequest = {
  image: "nodata-desktop.png",
  title: "No Request",
  description: "Add new request to see",
  buttonName : "ADD NEW REQUEST",
  route :""
}

  selectActive(index){

    this.active=this.data[index].name;
    this.data.forEach(element => {
      if(element.name==this.active){
         element.status="pending";
      }
      else{
         element.status="initial";
      }
    });

   }
}
