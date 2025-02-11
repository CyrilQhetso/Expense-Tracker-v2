import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionBTNComponent } from './new-transaction-btn.component';

describe('NewTransactionBTNComponent', () => {
  let component: NewTransactionBTNComponent;
  let fixture: ComponentFixture<NewTransactionBTNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTransactionBTNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTransactionBTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
