import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chose-your-project-team',
  templateUrl: './chose-your-project-team.component.html',
  styleUrls: ['./chose-your-project-team.component.css']
})
export class ChoseYourProjectTeamComponent {
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
