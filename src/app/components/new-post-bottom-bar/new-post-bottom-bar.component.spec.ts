import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostBottomBarComponent } from './new-post-bottom-bar.component';

describe('NewPostBottomBarComponent', () => {
  let component: NewPostBottomBarComponent;
  let fixture: ComponentFixture<NewPostBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostBottomBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
