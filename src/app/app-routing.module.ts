import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ProjectComponent } from './Pages/project/project.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { CreateProjectFirstStepComponent } from './Pages/create-project-first-step/create-project-first-step.component';
import { ChoseYourProjectTeamComponent } from './Pages/chose-your-project-team/chose-your-project-team.component';
import { CreateYourProjectComponent } from './Pages/create-your-project/create-your-project.component';

const routes: Routes = [
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "logout", component:LogoutComponent},
  {path: "dashboard" , component:UserComponent},
  {path: "firtsStep" , component:CreateProjectFirstStepComponent},
  {path: "profile/:id" , component:ProfileComponent,},
  {path: "profile" , component:ProfileComponent,},
  {path: "project/:id" , component:ProjectComponent,},
  {path: "chose-your-project-team",component:ChoseYourProjectTeamComponent},
  {path: "create-your-project",component:CreateYourProjectComponent},
  
  {path: "", component:HomePageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
