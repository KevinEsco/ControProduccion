import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Sector } from "src/app/models/sector";
import { Acciones } from "../Acciones.enum";

@Component({
  selector: 'app-sector-dialog',
  templateUrl: './sector-dialog.component.html',
  styleUrls: ['./sector.component.css'],
})


export class SectorDialogComponent {
  AccionesEnum = Acciones
  constructor(
    public dialogRef: MatDialogRef<SectorDialogComponent>,
    @Inject(MAT_DIALOG_DATA)

    public data: { sector: Sector; tipoDialogo: Acciones }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
