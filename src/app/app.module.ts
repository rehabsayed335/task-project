import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopnewsComponent } from './topnews/topnews.component';
import { FeaternewsComponent } from './featernews/featernews.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './shered/header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewsdepartmentComponent } from './newsdepartment/newsdepartment.component';
import { CollectionnewsComponent } from './collectionnews/collectionnews.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NewsComponent,
    NavbarComponent,
    TopnewsComponent,
    FeaternewsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DetailsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    TasksComponent,
    NewsdepartmentComponent,
    CollectionnewsComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
