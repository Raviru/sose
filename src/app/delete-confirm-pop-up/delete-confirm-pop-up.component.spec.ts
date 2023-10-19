import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmPopUpComponent } from './delete-confirm-pop-up.component';

describe('DeleteConfirmPopUpComponent', () => {
  let component: DeleteConfirmPopUpComponent;
  let fixture: ComponentFixture<DeleteConfirmPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfirmPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConfirmPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
