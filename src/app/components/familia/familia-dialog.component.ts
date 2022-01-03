import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Familia } from "src/app/models/familia";
import { Acciones } from "../Acciones.enum";


@Component({
  selector: 'app-familia-dialog',
  templateUrl: './familia-dialog.component.html',
  styleUrls: ['./familia.component.css'],
})

export class FamiliaDialogComponent {
  AccionesEnum = Acciones
  constructor(
    public dialogRef: MatDialogRef<FamiliaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)

    public data: { familia: Familia; tipoDialogo: Acciones}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
