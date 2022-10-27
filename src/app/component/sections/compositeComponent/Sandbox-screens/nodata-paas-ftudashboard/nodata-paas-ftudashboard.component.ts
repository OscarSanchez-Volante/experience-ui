import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';
import { containData1 } from '@inputs/Nodata-msgftuinputs';

@Component({
  selector: 'app-nodata-paas-ftudashboard',
  templateUrl: './nodata-paas-ftudashboard.component.html',
  styleUrls: ['./nodata-paas-ftudashboard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class NodataPaasFtudashboardComponent implements OnInit {
  containInput:Array <any>=containData1;
  @Input() active;
  data: any;
  constructor() { }

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
  public containRails = {
    image: "l-chart-nodata.png",
    title: "No Data available",
    description: "Lorem Ipsum is simply",
    buttonName : "LAUNCH SANDBOX",
    route :""
    }
    public containPaymentservices = {
      image: "img-no-data.png",
      title: "No Data available",
      description: "Lorem Ipsum is simply",
      buttonName : "LAUNCH SANDBOX",
      route :""
   }
   public containNotify = {
    image: "lock-image2.png",
    title: "No Data available",
    description: "Lorem Ipsum is simply",
    buttonName : "CONFIGURE NOTIFICATION",
    route :""
    }
	public containTable = {
		image: "no-data-doc.png",
		title: "No Reports available",
		description: "Lorem Ipsum is simply dummy text.",
		buttonName : "ADD REPORT",
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
