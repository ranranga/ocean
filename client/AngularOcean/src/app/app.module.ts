import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';


import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  // Contains the list of components in our app
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    MessageComponent,
    LoginComponent
  ],
  // List of dependencies that our app has
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  // List of services used in our app
  providers: [RestApiService, DataService, AuthGuardService],
  // List of components that'll be bootstrapped when app module is bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
