import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-your-project',
  templateUrl: './create-your-project.component.html',
  styleUrls: ['./create-your-project.component.css']
})
export class CreateYourProjectComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
