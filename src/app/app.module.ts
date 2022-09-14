import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";

import { NgxContextModule } from 'ngx-context';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './core/material/material.module';

import { HomeModule } from './modules/home/home.module';
import { NavigationModule } from "./core/navigation/navigation.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    NavigationModule,
    HomeModule,
    HttpClientModule,
    NgxContextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
