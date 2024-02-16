import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
