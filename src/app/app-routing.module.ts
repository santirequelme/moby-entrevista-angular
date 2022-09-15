import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostviewComponent } from './postview/postview.component';
import { DetailsviewComponent } from './detailsview/detailsview.component';
import { LoginComponent } from './login/login.component';
import { E404Component } from './e404/e404.component';

import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'posts', component: PostviewComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: 'posts/:id', component: DetailsviewComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))},
  { path: '**', redirectTo: '/404' },
  { path: '404', component: E404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
