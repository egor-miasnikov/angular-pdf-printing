import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BasicPdfPrintComponent } from './basic-pdf-print/basic-pdf-print.component';
import { AdvancedPdfPrintComponent } from './advanced-pdf-print/advanced-pdf-print.component';

@NgModule({
  declarations: [
    BasicPdfPrintComponent,
    AdvancedPdfPrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [BasicPdfPrintComponent, AdvancedPdfPrintComponent]
})
export class AppModule { }
