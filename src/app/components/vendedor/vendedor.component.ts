import { Component, OnInit } from '@angular/core';
import { VendedorMaterialModule } from 'src/app/components/vendedor/vendedor.material.module';
import { Vendedor } from 'src/app/models/vendedor';

const ELEMENT_DATA = [
  { id_evt_Vendedor:1, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Nieto', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},
  
  { id_evt_Vendedor:2, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Fedrich', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},

  { id_evt_Vendedor:3, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Olivan', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},

  { id_evt_Vendedor:4, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Nereo', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},

  { id_evt_Vendedor:5, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Cambiasso', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},

  { id_evt_Vendedor:6, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Bologna', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},

  { id_evt_Vendedor:7, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Bernardez', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},

  { id_evt_Vendedor:8, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Vera', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'},

  { id_evt_Vendedor:9, Cod_Vendedor: 'V1', Nombre_Vendedor : 'Juan Gonzales', Celular_Vendedor :'2284385125', Mail_Vendedor: 'emailtest@gmail.com'}
];
@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  displayedColumns: String[] = ['Cod_Vendedor','Nombre_Vendedor', 'Celular_Vendedor', 'Mail_Vendedor', 'Editar', 'Eliminar' ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  openDialog(id_evt_Vendedor:number){

  }
}
