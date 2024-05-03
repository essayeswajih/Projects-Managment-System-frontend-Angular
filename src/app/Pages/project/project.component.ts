import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectAndTasksService } from 'src/app/services/project-and-tasks.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  taskForm: FormGroup;
  commentForm: FormGroup<any>;
  id: String;
  Myproject:Project;
  user: User

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route : ActivatedRoute,
    private PAndTservice :ProjectAndTasksService
  ) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){

      this.taskForm = this.formBuilder.group({
        name: ['', Validators.required],
        details: [''],
        startDate: [''],
        endDate: ['']
      });
  
      this.commentForm = this.formBuilder.group({
        commentText: ['', Validators.required]
      });
      this.route.params.subscribe(params=>{
        this.id = params['id'];
        if(this.id != null && this.id>'0' && this.id<'99999999999999999999999999999'){
          this.authService.getUser().subscribe(
            (data)=>{
              this.user = data;
              let exist=false;
              for(let proj of data.project){
                if(proj.id==Number(this.id)){
                  exist=true;
                  this.Myproject = proj;
                  break;
                }
              }
              if(exist==false){
                this.router.navigateByUrl('/')
              }else{
                console.log(this.Myproject);
              }
            },
            (error)=>this.router.navigateByUrl('/login')
          );
          
        }else{
          this.router.navigateByUrl("/");
        }
      })

    }else{
      this.router.navigateByUrl("/login");
    }
    
  }

  onCreateTask() {
    // Logic to handle creating task
  }
  onSubmitComment() {
    throw new Error('Method not implemented.');
    }
}
