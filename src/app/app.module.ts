import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
