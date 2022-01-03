import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from 'src/app/components/cliente/cliente.component';
import { FamiliaComponent } from 'src/app/components/familia/familia.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { VendedorComponent } from 'src/app/components/vendedor/vendedor.component';
import { SectorComponent } from './components/sector/sector.component';
import { FormsModule } from '@angular/forms';
import { AtributoComponent } from './components/atributo/atributo.component';
import { VendedorDialogComponent } from './components/vendedor/vendedor-dialog.component';
import { SectorDialogComponent } from './components/sector/sector-dialog.component';
import { AtributoDialogComponent } from './components/atributo/atributo-dialog.component';
import { ClienteDialogComponent } from './components/cliente/cliente-dialog.component';
import { FamiliaDialogComponent } from './components/familia/familia-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FamiliaComponent,
    VendedorComponent,
    SectorComponent,
    AtributoComponent,
    VendedorDialogComponent,
    SectorDialogComponent,
    AtributoDialogComponent,
    ClienteDialogComponent,
    FamiliaDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
