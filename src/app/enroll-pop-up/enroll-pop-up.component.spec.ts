import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPopUpComponent } from './enroll-pop-up.component';

describe('EnrollPopUpComponent', () => {
  let component: EnrollPopUpComponent;
  let fixture: ComponentFixture<EnrollPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
