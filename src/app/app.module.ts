import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { UserMenuOptionsComponentComponent } from './components/user-menu-options-component/user-menu-options-component.component';
import { VistaGeneralDeLaCuentaComponentComponent } from './components/vista-general-de-la-cuenta-component/vista-general-de-la-cuenta-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    UserMenuOptionsComponentComponent,
    VistaGeneralDeLaCuentaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
