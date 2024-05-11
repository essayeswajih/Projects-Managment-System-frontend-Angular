import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-project-first-step',
  templateUrl: './create-project-first-step.component.html',
  styleUrls: ['./create-project-first-step.component.css']
})
export class CreateProjectFirstStepComponent {
  constructor(private route : Router){}
  NavigateTo(url:string){
    this.route.navigateByUrl("/"+url);
  }

}
