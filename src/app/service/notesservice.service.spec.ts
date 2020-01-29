import { TestBed } from '@angular/core/testing';

import { NotesserviceService } from './notesservice.service';

describe('NotesserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesserviceService = TestBed.get(NotesserviceService);
    expect(service).toBeTruthy();
  });
});
