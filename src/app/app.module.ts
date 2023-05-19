import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorService } from './interceptor/interceptor.service';
import { LocalesDetailsComponent } from './pages/locales-details/locales-details.component';
import { RegisterComponent } from './register/register.component';
import { TapasDetailsComponent } from './pages/tapas-details/tapas-details.component';
import { TapasComponent } from './pages/tapas/tapas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    NavbarComponent,
    LoginComponent,
    LocalesDetailsComponent,
    RegisterComponent,
    TapasDetailsComponent,
    TapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    MovieApiServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
