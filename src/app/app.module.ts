import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageContainerComponent } from './modules/main-page/container/main-page-container/main-page-container.component';
import {HeaderModule} from "./core/components/header/header.module";

@NgModule({
  declarations: [
    AppComponent,
    MainPageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
