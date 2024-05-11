import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  imageNumber:Number;
  constructor(private route : Router,private auth:AuthService){
    this.imageNumber=3;
  }
  OnHover(x:Number){
    this.imageNumber = x;
  }
  NavigateTo(url:string){
    this.route.navigateByUrl("/");
  }
  Logout(){
    this.auth.logout();
    window.location.href="/";
  }
}
