import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCitasComponent } from './list-citas/list-citas.component';
import { DetailCitasComponent } from './detail-citas/detail-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCitasComponent,
    DetailCitasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
