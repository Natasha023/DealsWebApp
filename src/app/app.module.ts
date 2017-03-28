import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';

import {DealDataService} from './deals/deal.data.service';
import {FilterPipe} from './deals/filter.pipe';

//Takes a metadata object that tells Angular how to compile and run module code.
@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    FilterPipe,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DealDataService,FilterPipe], //to make services and values known to DI
  bootstrap: [AppComponent]
})
export class AppModule { }
