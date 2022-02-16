import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateYourProjectComponent } from './initiate-your-project.component';

describe('InitiateYourProjectComponent', () => {
  let component: InitiateYourProjectComponent;
  let fixture: ComponentFixture<InitiateYourProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateYourProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateYourProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
