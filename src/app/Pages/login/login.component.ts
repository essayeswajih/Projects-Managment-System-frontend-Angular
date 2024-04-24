import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup ;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.email],
      password: ['', Validators.required],
    })
  }
  submitForm(){ 
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if (response.token != null) {
          alert("Hello, Your token is " + response.token);
          const jwtToken = response.token;
          localStorage.setItem('token', jwtToken);
          this.router.navigateByUrl("/dashboard");
        }
      }
    );
  }
  

  }
