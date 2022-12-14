import { Component, EventEmitter, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import{activityPopup} from '../../../interface/activitypopup-interface'
@Component({
  selector: 'app-activity-note-popup',
  templateUrl: './activity-note-popup.component.html',
  styleUrls: ['./activity-note-popup.component.scss']
})
export class ActivityNotePopupComponent implements OnInit {

  public hasBaseDropZoneOver:boolean; 
  Loadedfiles:activityPopup[]=[{"fileName":"MerBan_monthly.csv","fileSize":"6 MB","status":"uploaded"},{"fileName":"MerBan_inst.csv","fileSize":"600 MB","status":"uploading"},{"fileName":"MerBan_email.pdf","fileSize":"2 GB","status":"not-started"}]


  public uploader1: FileUploader = new FileUploader({
    url: 'http://localhost:3000/fileupload/',
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['xls','pdf','csv']


    });
    public fileOverBase(e:boolean):void {
      this.hasBaseDropZoneOver = e;
    }
  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
  }
  constructor() { }

  ngOnInit(): void {
  }


}
