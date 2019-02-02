import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from '@app/app-routing.module';

import { AppComponent } from '@app/app.component';
import { BASE_URL } from '@app/app.config';
import { environment } from '@env/environment';
import { ProgramsModule } from './programs/programs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    ProgramsModule
  ],
  providers: [{ provide: BASE_URL, useValue: environment.baseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule {}
