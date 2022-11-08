import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { elementAt } from 'rxjs-compat/operator/elementAt';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private toastr:ToastrService ) { }


  public OpenToast(success,msj){
    success?this.toastr.success(msj) :this.toastr.error('',msj);
  }
}
