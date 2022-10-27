import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest, HttpParams, HttpHeaders, HttpResponse,HttpEvent } from '@angular/common/http';
@Injectable({ 
  providedIn: 'root'
})
export class JsonHttpService {
host:string="http://localhost:3000";
  constructor(private http:HttpClient) {

   }
  // Messaging API small Card content
  getSelectedAddon2(){
return this.http.get(this.host+"/selectedAddOn2/")
  }
  // PaymentRails small Card content
  getSelectedAddon1(){
    return this.http.get(this.host+"/selectedAddOn1/")
  }
  //select service card data of both payment rails and messaging API
  getSelectValue(){
    return this.http.get(this.host+"/SelectValue/")
  }
  // Table admin user Input
  getAll()
{
 return this.http.get(this.host+"/adminContentTable/"); 
}
// setup 2 payment rails flow input
getsetup2Accordiondata(){
 return this.http.get(this.host+"/Setup2PaymentRailsInput/"); 
}
//setup 2 message creators flow input
getTreeinputValidators(){
  return this.http.get(this.host+"/Setup2TreeinputValidators/"); 
 }
 getTreeinputCreators(){
  return this.http.get(this.host+"/Setup2TreeinputCreator/"); 
 }
 getTreeinputTransformer(){
  return this.http.get(this.host+"/Setup2TreeinputTransformer/"); 
 }
 // review order PaaS accordion data-- not working and for selected rails.
 getReviewOrderAccordiandata(){
  return this.http.get(this.host+"/ReviewOrderAccordianData/"); 
 }
 // message carousel small card input for slick
 getMessagecarouselCarddata(){
  return this.http.get(this.host+"/MessagecarouselCarddata/"); 
 }
  // message modal pop up of your messaging API small card input 
  getMessageModalpopupcardData(){
    return this.http.get(this.host+"/MessageModalpopupcardData/"); 
   }
  //User admin expand name  page table contents and heading
   getUserdetailTablehead(){
    return this.http.get(this.host+"/UserdetailTablehead/"); 
   }
   getUserdetailTablecontent(){
    return this.http.get(this.host+"/UserdetailTablecontent/"); 
   }
    //User admin main page table contents and heading
    getMainadminuserTablehead(){
      return this.http.get(this.host+"/MainadminuserTablehead/"); 
     }
     getMainadminuserTablecontent(){
      return this.http.get(this.host+"/MainadminuserTablecontent/"); 
     }
     getMainadminuserTablecontentBySort(sortType:string){
      return this.http.get(this.host+"/MainadminuserTablecontent?_sort=user&_order="+sortType); 
     }
  

  //payment rails getting around page small card carousel input.
  getPaymentrailsgettingaroundCarddata(){
    return this.http.get(this.host+"/PaymentrailsgettingaroundCarddata/"); 
   }
     //review order for PaaS and Message API
     getreviewOrderInput(){
      return this.http.get(this.host+"/reviewOrderInput/")
    }
    getMessageReviewOrderInput(){
      return this.http.get(this.host+"/MessageReviewOrderInput/")
    }
}
