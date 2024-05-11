import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseYourProjectTeamComponent } from './chose-your-project-team.component';

describe('ChoseYourProjectTeamComponent', () => {
  let component: ChoseYourProjectTeamComponent;
  let fixture: ComponentFixture<ChoseYourProjectTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoseYourProjectTeamComponent]
    });
    fixture = TestBed.createComponent(ChoseYourProjectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
