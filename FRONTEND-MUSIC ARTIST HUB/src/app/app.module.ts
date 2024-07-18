import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component'; // Import the HomepageComponent

const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Default route to login
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomepageComponent // Declare the HomepageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)  // Configure the router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
