import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Vendedor } from 'src/app/models/vendedor';

const ELEMENT_DATA = [
  {
    id_evt_Vendedor: 1,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Nieto',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 2,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Fedrich',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 3,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Olivan',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 4,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Nereo',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 5,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Cambiasso',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 6,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Bologna',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 7,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Bernardez',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 8,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Vera',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },

  {
    id_evt_Vendedor: 9,
    Cod_Vendedor: 'V1',
    Nombre_Vendedor: 'Juan Gonzales',
    Celular_Vendedor: '2284385125',
    Mail_Vendedor: 'emailtest@gmail.com',
  },
];
@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  displayedColumns: String[] = [
    'Seleccionar',
    'Cod_Vendedor',
    'Nombre_Vendedor',
    'Celular_Vendedor',
    'Mail_Vendedor',
    'Editar',
    'Eliminar',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<Vendedor>(true, []);

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id_evt_Vendedor: number): void {
    const vendedor = this.dataSource.data.find(
      (vendedor) => vendedor.id_evt_Vendedor === id_evt_Vendedor
    );

    const dialogRef = this.dialog.open(VendedorDialogComponent, {
      maxWidth: '600px',
      data: { vendedor: vendedor },
    });

    dialogRef.afterClosed().subscribe((result) => {
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
}

@Component({
  selector: 'app-vendedor-dialog',
  templateUrl: './vendedor-dialog.component.html',
})
export class VendedorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VendedorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { vendedor: Vendedor }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
