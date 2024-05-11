import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router:Router){}
  CreateProjectFirstStep(){
    this.router.navigateByUrl("/firtsStep")
  }

}
