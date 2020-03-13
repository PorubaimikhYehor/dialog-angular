import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from './dialog/dialog.module';
import { Dialog1Component } from './components/dialog1/dialog1.component';
import { Dialog2Component } from './components/dialog2/dialog2.component';

@NgModule({
  declarations: [
    AppComponent,
    Dialog1Component,
    Dialog2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
