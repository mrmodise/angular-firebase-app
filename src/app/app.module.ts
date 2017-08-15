import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/shared/app-routing.module';
import { AppComponent } from './components/start/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {AdminModule} from './admin/admin.module';
import { ErrorComponent } from './components/error/error.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
