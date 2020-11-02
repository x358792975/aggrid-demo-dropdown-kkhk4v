import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DataService } from './data.service';

import { AgGridModule } from 'ag-grid-angular';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, DropdownComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DataService ]
})
export class AppModule { }
