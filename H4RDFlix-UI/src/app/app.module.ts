import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainMenuComponent } from './componentes/main-menu/main-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowcaseComponent } from './componentes/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
