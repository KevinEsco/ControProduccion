import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from 'src/app/components/cliente/cliente.component';
import { FamiliaComponent } from 'src/app/components/familia/familia.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { VendedorComponent, VendedorDialogComponent } from 'src/app/components/vendedor/vendedor.component';
import { SectorComponent } from './components/sector/sector.component';
import { FormsModule } from '@angular/forms';
import { AtributoComponent } from './components/atributo/atributo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FamiliaComponent,
    VendedorComponent,
    SectorComponent,
    AtributoComponent,
    VendedorDialogComponent
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
