import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottpasswordComponent } from './forgottpassword.component';

describe('ForgottpasswordComponent', () => {
  let component: ForgottpasswordComponent;
  let fixture: ComponentFixture<ForgottpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
