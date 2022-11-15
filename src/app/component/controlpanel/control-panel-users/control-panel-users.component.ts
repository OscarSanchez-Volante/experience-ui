import { Component,Input, OnInit } from '@angular/core';
//importa las definiciones de los objetos  controlUserTableHead,controlUserTableContent del archivo interface
import { controlUserTableHead,controlUserTableContent} from '../../../interface/control-panel-users-table';

// importa el servicio muckup
 import { JsonHttpService } from 'src/app/services/json-http/json-http.service';

 //declarando el elemento seleccionado, plantillas y estilos
@Component({
  selector: 'app-control-panel-users',
  templateUrl: './control-panel-users.component.html',
  styleUrls: ['./control-panel-users.component.css']
})

export class ControlPanelUsersComponent implements OnInit {
// se inicializan las variables con los valores del header y contenido en blanco

  public tableHead: controlUserTableHead[];
  public tableValues: controlUserTableContent[];
  public active:string;

  // inicializa la llamada del servicio
   constructor(private jsonhttp:JsonHttpService) { }

  ngOnInit(): void {

    // 
     this.jsonhttp.getControlPanelUser("assets/data/admin.json").subscribe(data => {
      this.tableHead = data['controlUserTableHead'];
      this.tableValues = data['controlUserTableContent'];
     
     })
     
     
  



  }
   

  
}

