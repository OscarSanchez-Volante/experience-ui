import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  
  public hasBaseDropZoneOver:boolean; 
  Loadedfiles:any=[{"fileName":"MerBan_monthly.csv","fileSize":"6 MB","status":"uploaded"},{"fileName":"MerBan_inst.csv","fileSize":"600 MB","status":"uploading"},{"fileName":"MerBan_email.pdf","fileSize":"2 GB","status":"not-started"}]


  public uploader1: FileUploader = new FileUploader({
    url: 'http://localhost:3000/fileupload/',
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['xls','pdf','csv']


    });
    public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
    }
  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
