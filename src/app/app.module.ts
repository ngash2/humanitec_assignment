import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { BASE_URL } from '@app/app.config';
import { environment } from '@env/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: BASE_URL, useValue: environment.baseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule {}
