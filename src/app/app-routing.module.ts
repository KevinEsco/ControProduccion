import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtributoComponent } from './components/atributo/atributo.component';
import { ClienteDomicilioComponent } from './components/cliente domicilio/clienteDomicilio.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { SectorComponent } from './components/sector/sector.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent, data: { title: 'Cliente' } },
  { path: 'familia', component: FamiliaComponent, data: { title: 'Familia' } },
  {
    path: 'vendedor',
    component: VendedorComponent,
    data: { title: 'Vendedor' },
  },
  { path: 'sector', component: SectorComponent, data: { title: 'Sector' } },
  { path: 'atributo', component: AtributoComponent, data: { title: 'Atributo' } },
  { path: 'cliente-domicilio', component: ClienteDomicilioComponent, data: { title: 'Cliente Domicilio' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
