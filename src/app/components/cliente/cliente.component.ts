import { Component } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';

export interface Cliente {
  Nombre: string;
  DNI: string;
  IVA: string;
  Email: string;
}
const ELEMENT_DATA = [
  { Nombre: 'Juan Sosa', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Gonzales', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Vera', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Bernardez', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Bologna', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Cambiasso', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Nereo', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Olivan', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Fedrich', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
  { Nombre: 'Juan Nieto', DNI:'24929193', IVA:'Responsable Inscripto', Email: 'emailtest@gmail.com' },
];
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  displayedColumns: string[] = ['Nombre','DNI', 'IVA', 'Email' ];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() {}
  selectedIndex= -1
  onRowClicked(row: any) {
    console.log('row clicked ' + JSON.stringify(row));
    // const index = this.listData.data.indexOf(row);
    // console.log( ' Index ' + index);
}
highlight(row: { key: any; }) {
  this.selectedIndex = row.key;
}
  selectedRow = -1;
}
