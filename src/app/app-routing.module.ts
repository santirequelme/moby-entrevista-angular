import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostviewComponent } from './postview/postview.component';
import { DetailsviewComponent } from './detailsview/detailsview.component';
import { LoginComponent } from './login/login.component';
import { E404Component } from './e404/e404.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "posts", component: PostviewComponent},
  { path: "deta", component: DetailsviewComponent},
  { path: "login", component: LoginComponent},
  { path: "**", redirectTo: "/404" },
  { path: "404", component: E404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
