import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TasksComponent } from './tasks/tasks.component';
import { DetailsComponent } from './details/details.component';
import { NewsComponent } from './news/news.component';
import { NewsdepartmentComponent } from './newsdepartment/newsdepartment.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'index',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'tasks',component:TasksComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:RegisterComponent},
  {path:'**',component:PageNotFoundComponent}
  /*{path:'News/item/:id', component:NewsComponent},
  {path:'newsdepartment/:id', component:NewsdepartmentComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
