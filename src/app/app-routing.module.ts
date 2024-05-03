import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ProjectComponent } from './Pages/project/project.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "dashboard" , component:UserComponent},
  {path: "profile/:id" , component:ProfileComponent,},
  {path: "profile" , component:ProfileComponent,},
  {path: "project/:id" , component:ProjectComponent,},
  {path: "", component:HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
