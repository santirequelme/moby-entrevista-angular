import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostviewComponent } from './postview/postview.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DetailsviewComponent } from './detailsview/detailsview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { LoginComponent } from './login/login.component';
import { E404Component } from './e404/e404.component';
import { CommentsComponent } from './comments/comments.component';
import { TooltipModule } from 'primeng/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    PostviewComponent,
    HomeComponent,
    HeaderComponent,
    DetailsviewComponent,
    LoginComponent,
    E404Component,
    CommentsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    FieldsetModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    InputTextareaModule,
    TooltipModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
