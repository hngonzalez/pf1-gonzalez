import { TestBed } from '@angular/core/testing';

import { EditCoursesService } from './edit-courses.service';

describe('EditCoursesService', () => {
  let service: EditCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
