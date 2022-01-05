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

import { UniquePipe } from './components/vendedor/unique.pipe';
import {
  HeaderComponent,
  HeaderMenuItemComponent,
} from './components/navigation/header/header.component';
import { ThemeService } from './services/theming/theme.service';
import {
  NgMaterialMultilevelMenuModule,
  MultilevelMenuService,
} from 'ng-material-multilevel-menu';
import { HttpClientModule } from '@angular/common/http';
import { StyleManagerService } from './services/theming/style-manager.service';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { ClienteDomicilioComponent } from './components/cliente domicilio/clienteDomicilio.component';
import { ClienteDomicilioDialogComponent } from './components/cliente domicilio/clienteDomicilio-dialog.component';

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
    ClienteDomicilioComponent,
    ClienteDomicilioDialogComponent,
    SidenavComponent,
    HeaderComponent,
    HeaderMenuItemComponent,
    UniquePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    NgMaterialMultilevelMenuModule,
  ],
  providers: [ThemeService, MultilevelMenuService, StyleManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
