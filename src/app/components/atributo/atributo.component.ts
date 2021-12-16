import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';
import { Sector } from 'src/app/models/sector';
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
    'id_min_Atributo',
    'Cod_Atributo',
    'Desc_Atributo',
    'Editable_Atributo',
    'Tipo_dato_Atributo',
    'Longitud_Atributo',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<Atributo>(true, []);
  dialog: any;
  constructor() {}

  ngOnInit() {}

  metodoVacio(event: Event) {
    console.log('holi :D');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(idAtributo: number): void {
    const atributo = this.dataSource.data.find(
      (atributo) => atributo.id_min_Atributo === idAtributo
    );

    const dialogRef = this.dialog.open(AtributoDialogComponent, {
      maxWidth: '600px',
      data: { Atributo: atributo },
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

export class AtributoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AtributoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { Atributo: Atributo }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
