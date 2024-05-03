import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = "Projecty";
  navList:navItem[]=[];
  constructor(private auth : AuthService){}
  ngOnInit(){
    if(this.auth.isLoggedIn()){
      this.navList.push({ item : "Profile", url : "/profile"});
      if(this.auth.isAdmin()){
        this.navList.push(
          { item : "Dashboard", url : "/dashboard"},
          { item : "Logout", url : "/logout"}
        );
      }
      else{
        this.navList.push(
          { item : "Logout", url : "/logout"}
        );
      }
      
    }
    else{
      this.navList= [
        { item : "Register", url : "/register"},
        { item : "Login", url : "/login"}
      ];
    }
   
  }
}
interface navItem{
  item:String
  url:String
}
