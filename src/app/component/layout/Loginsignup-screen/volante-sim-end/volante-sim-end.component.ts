import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{validateUIInteface} from '../../../../interface/layout-interface'

@Component({
  selector: 'app-volante-sim-end',
  templateUrl: './volante-sim-end.component.html',
  styleUrls: ['./volante-sim-end.component.scss']
})
export class VolanteSimEndComponent implements OnInit {
  
  constructor(private jsonhttp:JsonHttpService) { }
  public volantesimdata:validateUIInteface;
  ngOnInit(): void {
    this.jsonhttp.getvolanteSim("assets/data/admin.json").subscribe(data => {
      this.volantesimdata = data['volanteSim'][0]
    })
  }

}
