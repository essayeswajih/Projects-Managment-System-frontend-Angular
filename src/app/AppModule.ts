import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ProjectComponent } from './Pages/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './Pages/logout/logout.component';
import { ChoseYourProjectTeamComponent } from './Pages/chose-your-project-team/chose-your-project-team.component';
import { CreateYourProjectComponent } from './Pages/create-your-project/create-your-project.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    ProfileComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    ChoseYourProjectTeamComponent,
    CreateYourProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
