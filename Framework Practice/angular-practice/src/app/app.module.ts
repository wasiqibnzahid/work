import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InitialPage } from './app.component';

@NgModule({
  declarations: [InitialPage],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [InitialPage],
})
export class AppModule {}
