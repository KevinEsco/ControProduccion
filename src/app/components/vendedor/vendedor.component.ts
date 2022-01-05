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
import { Acciones } from '../Acciones.enum';
import { VendedorDialogComponent } from './vendedor-dialog.component';

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
    // Nombre_Vendedor: 'Juan Fedrich',
    Nombre_Vendedor: 'Juan Nieto',

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
  styleUrls: ['./vendedor.component.scss'],
})
export class VendedorComponent implements OnInit {
  displayedColumns: String[] = [
    'Seleccionar',
    'Cod_Vendedor',
    'Nombre_Vendedor',
    'Celular_Vendedor',
    'Mail_Vendedor',
    'Acciones',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selection = new SelectionModel<Vendedor>(true, []);
  mostrarCargando: boolean = false;
  AccionesEnum = Acciones;

  filterMail_Vendedor: any = null;
  filterNombre_Vendedor: any = null;
  searchFilter: string = '';
  constructor(public dialog: MatDialog) {}

  ngOnDestroy() {
    document.body.className = '';
  }
  ngOnInit() {
    this.dataSource.filterPredicate = this.customFiltered();
    this.filterMail_Vendedor = '';
    this.filterNombre_Vendedor = '';
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    var numSelected = this.selection.selected.length;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

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
  openDialog(id_evt_Vendedor: number, accion: Acciones): void {
    const vendedor = this.dataSource.data.find(
      (vendedor) => vendedor.id_evt_Vendedor === id_evt_Vendedor
    );
    const dialogRef = this.dialog.open(VendedorDialogComponent, {
      minWidth: '33.3%',
      data: { vendedor: vendedor, tipoDialogo: accion },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
  // openDialogModificar(id_evt_Vendedor: number): void {
  //   const vendedor = this.dataSource.data.find(
  //     (vendedor) => vendedor.id_evt_Vendedor === id_evt_Vendedor
  //   );

  //   const dialogRef = this.dialog.open(VendedorDialogComponent, {
  //     minWidth: '400px',
  //     data: { vendedor: vendedor, tipoDialogo: 'Modificar', editable: true },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       // if (vendedor.Tipo_vendedor == 'N') {
  //       // 	var correcto = true;
  //       // 	if (isNaN(result)) {
  //       // 		correcto = false
  //       // 	} else {
  //       // 		const minimo = Number.parseFloat(vendedor.Minimo_vendedor);
  //       // 		const maximo = Number.parseFloat(vendedor.Maximo_vendedor);
  //       // 		const value = Number.parseFloat(result);
  //       // 		if (minimo && (value < minimo)) correcto = false
  //       // 		if (maximo && (value > maximo)) correcto = false
  //       // 	}
  //       // 	if (!correcto) {
  //       // 		alert('El vendedor ingresado no es valido');
  //       // 		vendedor.Valor_vendedor = this.viejoValor;
  //       // 	} else {
  //       // 		this.nuevoValor = result;
  //       // 	}
  //       // } else {
  //       // 	this.nuevoValor = result;
  //       // }
  //     }

  //     // if (this.nuevoValor) {
  //     // 	this.http.put(this.config.getServerUrl() + '/vendedor/' + vendedor.id_mov_vendedor, { valor: this.nuevoValor, tipo: vendedor.Tipo_vendedor }).subscribe(res => {
  //     // 		this.recargarLista();
  //     // 	});
  //     // }
  //   });
  // }

  // openDialogVer(id_evt_Vendedor: number): void {
  //   const vendedor = this.dataSource.data.find(
  //     (vendedor) => vendedor.id_evt_Vendedor === id_evt_Vendedor
  //   );

  //   const dialogRef = this.dialog.open(VendedorDialogComponent, {
  //     minWidth: '400px',
  //     data: { vendedor: vendedor, tipoDialogo: 'Ver', editable: false },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       // if (vendedor.Tipo_vendedor == 'N') {
  //       // 	var correcto = true;
  //       // 	if (isNaN(result)) {
  //       // 		correcto = false
  //       // 	} else {
  //       // 		const minimo = Number.parseFloat(vendedor.Minimo_vendedor);
  //       // 		const maximo = Number.parseFloat(vendedor.Maximo_vendedor);
  //       // 		const value = Number.parseFloat(result);
  //       // 		if (minimo && (value < minimo)) correcto = false
  //       // 		if (maximo && (value > maximo)) correcto = false
  //       // 	}
  //       // 	if (!correcto) {
  //       // 		alert('El vendedor ingresado no es valido');
  //       // 		vendedor.Valor_vendedor = this.viejoValor;
  //       // 	} else {
  //       // 		this.nuevoValor = result;
  //       // 	}
  //       // } else {
  //       // 	this.nuevoValor = result;
  //       // }
  //     }

  //     // if (this.nuevoValor) {
  //     // 	this.http.put(this.config.getServerUrl() + '/vendedor/' + vendedor.id_mov_vendedor, { valor: this.nuevoValor, tipo: vendedor.Tipo_vendedor }).subscribe(res => {
  //     // 		this.recargarLista();
  //     // 	});
  //     // }
  //   });
  // }
  applyFilter(
    filterNombre_Vendedor?: string,
    filterMail_Vendedor?: string,
    event?: Event
  ) {
    if (event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.searchFilter = filterValue.toLowerCase();
      if (this.searchFilter == '') {
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filter =
          filterNombre_Vendedor + ',' + filterMail_Vendedor;
      } else {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    } else {
      this.dataSource.filter =
        filterNombre_Vendedor + ',' + filterMail_Vendedor;
    }
  }
  customFiltered() {
    return (data: Vendedor, filter: any) => {
      const NombreVendedor = data.Nombre_Vendedor.toLowerCase().trim();
      if (!this.filterNombre_Vendedor && !this.filterMail_Vendedor) {
        const contieneBusqueda = NombreVendedor.includes(this.searchFilter);
        return contieneBusqueda;
      } else {
        if (this.filterNombre_Vendedor && this.filterMail_Vendedor) {
          const contieneBusq = this.searchFilter
            ? NombreVendedor.includes(this.searchFilter)
            : true;
          return (
            data.Nombre_Vendedor == this.filterNombre_Vendedor &&
            data.Mail_Vendedor == this.filterMail_Vendedor &&
            contieneBusq
          );
        }
        const coincideNombre =
          data.Nombre_Vendedor == this.filterNombre_Vendedor;
        const contieneBusqueda = NombreVendedor.includes(this.searchFilter);
        if (this.filterNombre_Vendedor)
          return coincideNombre && contieneBusqueda;
        if (this.filterMail_Vendedor)
          return (
            data.Mail_Vendedor == this.filterMail_Vendedor &&
            (this.searchFilter
              ? NombreVendedor.includes(this.searchFilter)
              : true)
          );
        return true;
      }
    };
  }
  openDialogEliminar(id_evt_Vendedor: number): void {
    var vendedor = this.dataSource.data.find(
      (vendedor) => vendedor.id_evt_Vendedor === id_evt_Vendedor
    );
    const dialogRef = this.dialog.open(VendedorDialogComponent, {
      maxWidth: '50%',
      maxHeight: '80%',
      data: { vendedor: vendedor, tipoDialogo: 'Eliminar', editable: false },
    });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.http
    //       .delete(this.config.getServerUrl() + '/usuario/id/' + id_evt_Vendedor)
    //       .subscribe(
    //         (res) => {
    //           this._snackBar.open('Cambio/s aplicado/s', '', {
    //             duration: 3000,
    //           });
    //           this.buscarUsuariosWeb();
    //         },
    //         (err) => {
    //           this._snackBar.open('Error : Por favor reintentar', '', {
    //             duration: 3000,
    //           });
    //         }
    //       );
    //   }
    // });
  }
}
