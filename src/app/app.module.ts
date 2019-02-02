import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from '@app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { BASE_URL } from '@app/app.config';
import { environment } from '@env/environment';
import { ProgramsModule } from './programs/programs.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    ProgramsModule
  ],
  providers: [{ provide: BASE_URL, useValue: environment.baseUrl }, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
