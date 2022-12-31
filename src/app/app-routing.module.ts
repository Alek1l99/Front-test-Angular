import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaGeneralDeLaCuentaComponentComponent} from './components/vista-general-de-la-cuenta-component/vista-general-de-la-cuenta-component.component'
import {ServiceComponentComponent} from './service-component/service-component.component'
const routes: Routes = [
  { path: '', component: VistaGeneralDeLaCuentaComponentComponent },
  { path: 'posts', component: ServiceComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
