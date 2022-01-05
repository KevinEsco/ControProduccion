import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ClienteDomicilio } from "src/app/models/clienteDomicilio";
import { Acciones } from "../Acciones.enum";


@Component({
  selector: 'app-clienteDomicilio-dialog',
  templateUrl: './clienteDomicilio-dialog.component.html',
  styles: [
    '.btnCerrar{ float:right;padding: 0;width: 20px;height: 20px;font-size: 12px;}',
  ],
})

export class ClienteDomicilioDialogComponent {
  AccionesEnum = Acciones
  constructor(
    public dialogRef: MatDialogRef<ClienteDomicilioDialogComponent>,
    @Inject(MAT_DIALOG_DATA)

    public data: { cliente: ClienteDomicilio; tipoDialogo: Acciones}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
