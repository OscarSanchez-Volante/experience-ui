import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private toastr:ToastrService ) { }


  public OpenToast(success,msj){
    this.toastr.error('',msj);
  }
}
