import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Atributo } from 'src/app/models/atributo';
import { Acciones } from '../Acciones.enum';
import { AtributoDialogComponent } from './atributo-dialog.component';

const ELEMENT_DATA = [
  {
    id_min_Atributo: 1,
    Cod_Atributo: '1001',
    Desc_Atributo: 'Atributo 01',
    Editable_Atributo: 'Si',
    Tipo_dato_Atributo: 'Numero',
    Longitud_Atributo: 54,
  },
  {
    id_min_Atributo: 2,
    Cod_Atributo: '1002',
    Desc_Atributo: 'Atributo 02',
    Editable_Atributo: 'No',
    Tipo_dato_Atributo: 'String',
    Longitud_Atributo: 32,
  },
  {
    id_min_Atributo: 3,
    Cod_Atributo: '1003',
    Desc_Atributo: 'Atributo 03',
    Editable_Atributo: 'Si',
    Tipo_dato_Atributo: 'Numero',
    Longitud_Atributo: 22,
  },
];

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css'],
})
export class AtributoComponent implements OnInit {
  displayedColumns: string[] = [
    'Cod_Atributo',
    'Desc_Atributo',
    'Editable_Atributo',
    'Tipo_dato_Atributo',
    'Longitud_Atributo',
    'Editar',
    'Eliminar'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<Atributo>(true, []);
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

  openDialog(pIdAtributo: number, accion: Acciones): void {
    const atributo2 = this.dataSource.data.find(
      (atributo) => atributo.id_min_Atributo === pIdAtributo
    );

    const dialogRef = this.dialog.open(AtributoDialogComponent, {
      minWidth: '400px', minHeight: '360px',
      data: { atributo: atributo2, tipoDialogo: accion },
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