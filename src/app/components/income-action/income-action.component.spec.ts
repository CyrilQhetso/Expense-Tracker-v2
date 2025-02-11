import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeActionComponent } from './income-action.component';

describe('IncomeActionComponent', () => {
  let component: IncomeActionComponent;
  let fixture: ComponentFixture<IncomeActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomeActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
