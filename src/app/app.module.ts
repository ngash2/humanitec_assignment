import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from '@app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { BASE_URL } from '@app/app.config';
import { environment } from '@env/environment';
import { ProgramsModule } from './programs/programs.module';
import { AppService } from './app.service';
import { ActivitiesModule } from './activities/activities.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProgramEffects } from './programs/effects/program.effects';
import { ActivityEffects } from './activities/effects/activity.effects';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    ActivitiesModule,
    MatDialogModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ProgramEffects, ActivityEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [{ provide: BASE_URL, useValue: environment.baseUrl }, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
