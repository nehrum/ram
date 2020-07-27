import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../app/material/material.module';
import { UserCurdComponent } from '../app/modules/user/component/user-curd.component';
import { DailogExpComponent } from '../app/modules/user/component/dailog-exp.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCurdComponent,
    DailogExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  entryComponents:[DailogExpComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
