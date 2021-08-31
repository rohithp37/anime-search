import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/features/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentModule } from './shared/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModules } from './shared/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    SharedComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
