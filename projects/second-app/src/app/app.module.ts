import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SampleFormModule } from 'sample-form';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SampleFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
