import { TestBed } from '@angular/core/testing';

import { ProjectAndTasksService } from './project-and-tasks.service';

describe('ProjectAndTasksService', () => {
  let service: ProjectAndTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAndTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
