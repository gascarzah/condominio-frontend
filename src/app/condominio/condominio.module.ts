import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominioRoutingModule } from './condominio-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CocheraPageComponent } from './pages/cochera-page/cochera-page.component';
// import { DepartamentoComponent } from './pages/departamento/departamento.component';
// import { PersonaComponent } from './pages/persona/persona.component';
// import { TorreComponent } from './pages/torre/torre.component';

// import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    SearchPageComponent,
    CocheraPageComponent,
    // DepartamentoComponent,
    // PersonaComponent,
    // TorreComponent,
    // VehiculoComponent
  ],
  imports: [
    CommonModule,
    CondominioRoutingModule,

    ReactiveFormsModule
  ]
})
export class CondominioModule { }
