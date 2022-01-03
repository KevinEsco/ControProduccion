import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { Acciones } from '../Acciones.enum';
import { ClienteDialogComponent } from './cliente-dialog.component';
import { Cliente } from 'src/app/models/cliente';


const ELEMENT_DATA = [
  { id_evt_Cliente:1, Cod_Cliente: '01', Nombre_Cliente: 'Juan Sosa', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:2, Cod_Cliente: '02', Nombre_Cliente: 'Juan Gonzales', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:3, Cod_Cliente: '03', Nombre_Cliente: 'Juan Vera', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:4, Cod_Cliente: '04', Nombre_Cliente: 'Juan Bernardez', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:5, Cod_Cliente: '05', Nombre_Cliente: 'Juan Bologna', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:6, Cod_Cliente: '06', Nombre_Cliente: 'Juan Cambiasso', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:7, Cod_Cliente: '07', Nombre_Cliente: 'Juan Nereo', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:8, Cod_Cliente: '08', Nombre_Cliente: 'Juan Olivan', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:9, Cod_Cliente: '09', Nombre_Cliente: 'Juan Fedrich', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
  { id_evt_Cliente:10, Cod_Cliente: '10',Nombre_Cliente: 'Juan Nieto', id_evt_Tipo_Documento: 1, NumeroDocumento_Cliente:'24929193', TipoIVA_Cliente:'Responsable Inscripto', Mail_Inicio_Prod: 'emailtest@gmail.com', Mail_Fin_Prod:'emailtest@gmail.com', id_evt_Vendedor: 1},
];

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})

export class ClienteComponent implements OnInit {
  displayedColumns: string[] = ['Nombre_Cliente','NumeroDocumento_Cliente', 'TipoIVA_Cliente', 'Mail_Inicio_Prod', 'Editar', 'Eliminar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<Cliente>(true, []);
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

    const dialogRef = this.dialog.open(ClienteDialogComponent, {
      minWidth: '400px', minHeight: '360px',
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
