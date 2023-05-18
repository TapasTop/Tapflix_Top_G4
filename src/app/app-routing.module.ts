import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profile } from 'console';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { LocalesDetailsComponent } from './pages/locales-details/locales-details.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'locales/:id', component: LocalesDetailsComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
