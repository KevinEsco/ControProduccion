import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Atributo } from "src/app/models/atributo";
import { Acciones } from "../Acciones.enum";


@Component({
  selector: 'app-atributo-dialog',
  templateUrl: './atributo-dialog.component.html',
  styleUrls: ['./atributo.component.css'],
})

export class AtributoDialogComponent {
  AccionesEnum = Acciones
  constructor(
    public dialogRef: MatDialogRef<AtributoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)

    public data: { atributo: Atributo; tipoDialogo: Acciones}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
