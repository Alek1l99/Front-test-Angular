import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { UserMenuOptionsComponentComponent } from './components/user-menu-options-component/user-menu-options-component.component';
import { VistaGeneralDeLaCuentaComponentComponent } from './components/vista-general-de-la-cuenta-component/vista-general-de-la-cuenta-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    UserMenuOptionsComponentComponent,
    VistaGeneralDeLaCuentaComponentComponent,
    ServiceComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
