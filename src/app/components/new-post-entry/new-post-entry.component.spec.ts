import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostEntryComponent } from './new-post-entry.component';

describe('NewPostEntryComponent', () => {
  let component: NewPostEntryComponent;
  let fixture: ComponentFixture<NewPostEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
