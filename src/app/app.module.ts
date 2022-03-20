import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfessionalsModule } from './modules/professionals.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfessionalsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'R$ ' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
