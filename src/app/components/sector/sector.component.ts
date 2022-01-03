import { Component,Inject, OnInit, ViewChild } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';
import { Sector } from 'src/app/models/sector';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Acciones } from '../Acciones.enum';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SectorDialogComponent } from './sector-dialog.component';

const ELEMENT_DATA = [
  { idSector: 1, codigoSector: '1001', descSector: 'Sector 01' },
  { idSector: 2, codigoSector: '1002', descSector: 'Sector 02' },
  { idSector: 3, codigoSector: '1003', descSector: 'Sector 03' },
  { idSector: 4, codigoSector: '1004', descSector: 'Sector 04' },
  { idSector: 5, codigoSector: '1005', descSector: 'Sector 05' },
  { idSector: 6, codigoSector: '1006', descSector: 'Sector 06' },
  { idSector: 7, codigoSector: '1007', descSector: 'Sector 07' },
  { idSector: 8, codigoSector: '1008', descSector: 'Sector 08' },
  { idSector: 9, codigoSector: '1009', descSector: 'Sector 09' },
  { idSector: 10, codigoSector: '1010', descSector: 'Sector 10' },
  { idSector: 11, codigoSector: '1011', descSector: 'Sector 11' },
  { idSector: 12, codigoSector: '1012', descSector: 'Sector 12' },
  { idSector: 13, codigoSector: '1013', descSector: 'Sector 13' },
  { idSector: 14, codigoSector: '1014', descSector: 'Sector 14' },
];

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css'],
})
export class SectorComponent implements OnInit {
  displayedColumns: string[] = ['codigoSector', 'descSector', 'Editar', 'Eliminar',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<Sector>(true, []);
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

  openDialog(pIdSector: number, accion: Acciones): void {
    const sector2 = this.dataSource.data.find(
      (sector) => sector.idSector === pIdSector
    );
    const dialogRef = this.dialog.open(SectorDialogComponent, {
      minWidth: '400px',
      data: { sector: sector2, tipoDialogo: accion },
    });
  }

  isAllSelected() {
	const numSelected = this.selection.selected.length;
	const numRows = this.dataSource.data.length;
	return numSelected === numRows;
}

masterToggle() {
	if (this.isAllSelected()) {
		this.selection.clear()
	} else {
		this.dataSource.data.forEach(row => this.selection.select(row))
	}
} 

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  

}
