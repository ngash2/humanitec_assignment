import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from '@app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { BASE_URL } from '@app/app.config';
import { environment } from '@env/environment';
import { ProgramsModule } from './programs/programs.module';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities/activities.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    ProgramsModule,
    ActivitiesModule
  ],
  providers: [{ provide: BASE_URL, useValue: environment.baseUrl }, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
