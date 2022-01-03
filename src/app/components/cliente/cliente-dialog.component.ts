import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Cliente } from "src/app/models/cliente";
import { Acciones } from "../Acciones.enum";


@Component({
  selector: 'app-cliente-dialog',
  templateUrl: './cliente-dialog.component.html',
  styleUrls: ['./cliente.component.css'],
})

export class ClienteDialogComponent {
  AccionesEnum = Acciones
  constructor(
    public dialogRef: MatDialogRef<ClienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA)

    public data: { cliente: Cliente; tipoDialogo: Acciones}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
