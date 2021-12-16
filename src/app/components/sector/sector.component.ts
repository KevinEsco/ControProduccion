import { Component,Inject, OnInit, ViewChild } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';
import { Sector } from 'src/app/models/sector';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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
  displayedColumns: string[] = ['idSector', 'codigoSector', 'descSector'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<Sector>(true, []);
  dialog: any;
  
  constructor() {}

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

  openDialog(idSector: number): void {
    const sector = this.dataSource.data.find(
      (sector) => sector.idSector === idSector
    );

    const dialogRef = this.dialog.open(SectorDialogComponent, {
      maxWidth: '600px',
      data: { sector: sector },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // if (vendedor.Tipo_vendedor == 'N') {
        // 	var correcto = true;
        // 	if (isNaN(result)) {
        // 		correcto = false
        // 	} else {
        // 		const minimo = Number.parseFloat(vendedor.Minimo_vendedor);
        // 		const maximo = Number.parseFloat(vendedor.Maximo_vendedor);
        // 		const value = Number.parseFloat(result);
        // 		if (minimo && (value < minimo)) correcto = false
        // 		if (maximo && (value > maximo)) correcto = false
        // 	}
        // 	if (!correcto) {
        // 		alert('El vendedor ingresado no es valido');
        // 		vendedor.Valor_vendedor = this.viejoValor;
        // 	} else {
        // 		this.nuevoValor = result;
        // 	}
        // } else {
        // 	this.nuevoValor = result;
        // }
      }

      // if (this.nuevoValor) {
      // 	this.http.put(this.config.getServerUrl() + '/vendedor/' + vendedor.id_mov_vendedor, { valor: this.nuevoValor, tipo: vendedor.Tipo_vendedor }).subscribe(res => {
      // 		this.recargarLista();
      // 	});
      // }
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

export class SectorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SectorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sector: Sector }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}