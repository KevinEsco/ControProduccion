import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vendedor } from 'src/app/models/vendedor';
import { Acciones } from '../Acciones.enum';
import { VendedorComponent } from './vendedor.component';

@Component({
  selector: 'app-vendedor-dialog',
  templateUrl: './vendedor-dialog.component.html',
  styles: [
    '.btnCerrar{ float:right;padding: 0;width: 20px;height: 20px;font-size: 12px;}',
  ],
})
export class VendedorDialogComponent {
  AccionesEnum = Acciones;
  constructor(
    public dialogRef: MatDialogRef<VendedorDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { vendedor: Vendedor; tipoDialogo: Acciones }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
