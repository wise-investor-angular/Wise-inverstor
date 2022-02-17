import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareyourexperienceComponent } from './shareyourexperience.component';

describe('ShareyourexperienceComponent', () => {
  let component: ShareyourexperienceComponent;
  let fixture: ComponentFixture<ShareyourexperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareyourexperienceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareyourexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
