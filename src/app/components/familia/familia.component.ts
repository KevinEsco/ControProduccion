import { Component,Inject, OnInit, ViewChild } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';
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
import { Familia } from 'src/app/models/familia';
import { FamiliaDialogComponent } from './familia-dialog.component';


const ELEMENT_DATA = [
  { id_min_Familia: 1, Cod_Familia: '1001', Desc_Familia: 'Sector 01' },
  { id_min_Familia: 2, Cod_Familia: '1002', Desc_Familia: 'Sector 02' },
  { id_min_Familia: 3, Cod_Familia: '1003', Desc_Familia: 'Sector 03' },
  { id_min_Familia: 4, Cod_Familia: '1004', Desc_Familia: 'Sector 04' },
  { id_min_Familia: 5, Cod_Familia: '1005', Desc_Familia: 'Sector 05' },
  { id_min_Familia: 6, Cod_Familia: '1006', Desc_Familia: 'Sector 06' },
  { id_min_Familia: 7, Cod_Familia: '1007', Desc_Familia: 'Sector 07' },
  { id_min_Familia: 8, Cod_Familia: '1008', Desc_Familia: 'Sector 08' },
  { id_min_Familia: 9, Cod_Familia: '1009', Desc_Familia: 'Sector 09' },
  { id_min_Familia: 10, Cod_Familia: '1010', Desc_Familia: 'Sector 10' },
  { id_min_Familia: 11, Cod_Familia: '1011', Desc_Familia: 'Sector 11' },
  { id_min_Familia: 12, Cod_Familia: '1012', Desc_Familia: 'Sector 12' },
  { id_min_Familia: 13, Cod_Familia: '1013', Desc_Familia: 'Sector 13' },
  { id_min_Familia: 14, Cod_Familia: '1014', Desc_Familia: 'Sector 14' },
];

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent{
  displayedColumns: string[] = ['Cod_Familia', 'Desc_Familia', 'Editar', 'Eliminar',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<Familia>(true, []);
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

  openDialog(pIdFamilia: number, accion: Acciones): void {
    const familia = this.dataSource.data.find(
      (familia) => familia.id_min_Familia === pIdFamilia
    );
    const dialogRef = this.dialog.open(FamiliaDialogComponent, {
      minWidth: '400px',
      data: { familia: familia, tipoDialogo: accion },
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
