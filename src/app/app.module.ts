import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CurrencyMaskModule,
    NgbModule
  ],
  providers: [NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
