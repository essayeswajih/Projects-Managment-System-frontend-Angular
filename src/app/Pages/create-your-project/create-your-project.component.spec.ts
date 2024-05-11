import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourProjectComponent } from './create-your-project.component';

describe('CreateYourProjectComponent', () => {
  let component: CreateYourProjectComponent;
  let fixture: ComponentFixture<CreateYourProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateYourProjectComponent]
    });
    fixture = TestBed.createComponent(CreateYourProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
