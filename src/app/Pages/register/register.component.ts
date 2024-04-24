import { Component , OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup ;
  constructor(
  private service:JwtService,
  private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    }, {Validators:this.passwordMathValidator})
    
  }
  passwordMathValidator(formGroup: FormGroup) {
    const password= formGroup.get('password')?.value;
    const confirm_password = formGroup.get('confirm_password')?.value;
    if (password !==confirm_password) {
      formGroup.get('confirm_password')?.setErrors({ passwordMismatch: true});
    }
    else {
      formGroup.get('confirm_password')?.setErrors(null);
    }
  }
  submitForm() {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe(
      (Response) => {
        if (Response.id !=null){
        alert("hello" + Response.name);
      }
      } 
    )
  }
}