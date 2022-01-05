import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { Acciones } from '../Acciones.enum';
import { ClienteDomicilio } from 'src/app/models/clienteDomicilio';
import { ClienteDomicilioDialogComponent } from './clienteDomicilio-dialog.component';



const ELEMENT_DATA = [
  { id_evt_Cliente_Domicilio:1, id_evt_Cliente:1, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:2, id_evt_Cliente:2, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:3, id_evt_Cliente:3, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:4, id_evt_Cliente:4, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},  
  { id_evt_Cliente_Domicilio:5, id_evt_Cliente:5, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:6, id_evt_Cliente:6, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:7, id_evt_Cliente:7, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:8, id_evt_Cliente:8, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:9, id_evt_Cliente:9, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:10, id_evt_Cliente:10, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:11, id_evt_Cliente:11, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:12, id_evt_Cliente:12, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:13, id_evt_Cliente:13, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:14, id_evt_Cliente:14, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:15, id_evt_Cliente:15, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:16, id_evt_Cliente:16, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:17, id_evt_Cliente:17, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:18, id_evt_Cliente:18, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:19, id_evt_Cliente:19, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:20, id_evt_Cliente:20, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},
  { id_evt_Cliente_Domicilio:21, id_evt_Cliente:21, Domicilio_Cliente_Domicilio: 'Del Valle', Localidad_Cliente_Domicilio: 'Olavarria', CPostal_Cliente_Domicilio: '7400', Provincia_Cliente_Domicilio: 'Buenos Aires', Pais_Cliente_Domicilio:'Argentina', Mail_Despacho: 'emailtest@gmail.com', Telefono_Cliente_Domicilio:'15542133', Domicilio_Central_Cliente: 'Del valle'},

];

@Component({
  selector: 'app-clienteDomicilio',
  templateUrl: './clienteDomicilio.component.html',
  styleUrls: ['./clienteDomicilio.component.scss'],
})

export class ClienteDomicilioComponent implements OnInit {
  displayedColumns: string[] = ['Domicilio_Cliente_Domicilio', 'Localidad_Cliente_Domicilio', 'CPostal_Cliente_Domicilio', 'Provincia_Cliente_Domicilio', 'Pais_Cliente_Domicilio', 'Mail_Despacho', 'Telefono_Cliente_Domicilio', 'Domicilio_Central_Cliente', 'Editar', 'Eliminar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<ClienteDomicilio>(true, []);
  AccionesEnum = Acciones
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(pCliente: number, accion: Acciones): void {
    const cliente = this.dataSource.data.find(
      (cliente) => cliente.id_evt_Cliente === pCliente
    );

    const dialogRef = this.dialog.open(ClienteDomicilioDialogComponent, {
      minWidth: '400px', maxHeight: '600px',
      data: { cliente: cliente, tipoDialogo: accion },
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach((row) => this.selection.select(row));
    }
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }


}
