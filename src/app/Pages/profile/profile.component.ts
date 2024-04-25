import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myForm: FormGroup;
  userForm: FormGroup;
  changed = false;
  projects: any = [];
  id: any;
  img:String;
  user:any;
  NewUser:User1;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.myForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl('')
    });
    this.userForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl('')
    });
    this.img = "/assets/Images/customer.png";
  }

  ngOnInit(): void {
    console.log("loggedIn: " + this.authService.isLoggedIn());

    if (this.authService.isLoggedIn()) {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        if (this.id) {
          this.userService.getUserById(this.id).subscribe(
            (userData) => {
              this.user=userData;
              this.img=userData["imageUrl"];
              this.populateForms(userData);
              console.log(this.img)
            },
            (error) => {
              console.error("Error fetching user by ID:", error);
              this.router.navigateByUrl("/");
            }
          );
        } else {
          this.userService.getUserByEmail(this.authService.getUserId()).subscribe(
            (userData) => {
              console.log(typeof(userData));
              this.user=userData;
              this.img=userData["imageUrl"];
              this.populateForms(userData);
              console.log(this.img)
            },
            (error) => {
              console.error("Error fetching user by email:", error);
              this.router.navigateByUrl("/");
            }
          );
        }
      });
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  populateForms(userData: any): void {
    this.userForm.setValue({
      'first_name': userData['firstName'],
      'last_name': userData['lastName'],
      'email': userData['email']
    });
    this.myForm.setValue(this.userForm.value);
    this.projects = userData['project'];
  }

  dataChanged(){
    if(
      this.myForm.value.first_name!=this.userForm.value.first_name || 
      this.myForm.value.last_name!=this.userForm.value.last_name || 
      this.myForm.value.email!=this.userForm.value.email
    ){
      this.changed=true;
    }
    else{
      this.changed=false;
    }
}

  onSubmit(): void {
    console.log(this.myForm.value);
    this.user.firstName=this.myForm.value.first_name;
    this.user.lastName=this.myForm.value.last_name;
    this.user.email=this.myForm.value.email;
    console.log(this.user);
    console.log(this.NewUser)
    this.NewUser= new User1();
    this.NewUser.id = this.user.id;
    this.NewUser.firstName = this.user.firstName;
    this.NewUser.lastName = this.user.lastName;
    this.NewUser.email = this.user.email;
    this.NewUser.password = this.user.password;
    this.NewUser.role = this.user.role;
    this.NewUser.userName = this.user.userName;
    this.NewUser.imageUrl = this.user.imageUrl;
    this.NewUser.userCode = this.user.userCode;
    
    console.log(this.NewUser);
    this.userService.updateUser(this.NewUser).subscribe((data)=>{
      alert("Profile updated successfully!");
      console.log(data);
      window.location.reload();
    });
    this.changed = false;
  }
  RedirectToProject(IdProject: any): void{
    this.router.navigateByUrl(`project/${IdProject}`);
  }
}
class User1 {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  userName: string;
  imageUrl: string;
  userCode: string;

}
