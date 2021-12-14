import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent , data: { title: 'Cliente' } },
  { path: 'familia', component: FamiliaComponent , data: { title: 'Familia' } },
  { path: 'vendedor', component: VendedorComponent , data: { title: 'Vendedor' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
