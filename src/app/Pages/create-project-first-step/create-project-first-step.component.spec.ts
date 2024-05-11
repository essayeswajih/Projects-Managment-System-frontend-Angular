import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectFirstStepComponent } from './create-project-first-step.component';

describe('CreateProjectFirstStepComponent', () => {
  let component: CreateProjectFirstStepComponent;
  let fixture: ComponentFixture<CreateProjectFirstStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProjectFirstStepComponent]
    });
    fixture = TestBed.createComponent(CreateProjectFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
