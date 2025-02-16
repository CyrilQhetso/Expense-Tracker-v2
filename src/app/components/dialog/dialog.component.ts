import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Budget } from '../../classes/budget';
import { BudgetService } from '../../services/budget.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  @Output() close = new EventEmitter<void>();
  @Input() budgets!: Budget[];
  newBudget! : Budget;

  constructor(private _budgetService: BudgetService) {}

  addBudgetForm: FormGroup = new FormGroup({
    budgetName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
    amount: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
    budgetFor: new FormControl('food and drinks'),
    dateFrom: new FormControl(null, [Validators.required]),
    dateTo: new FormControl(null , [Validators.required]),
  }, {validators: this.dateRangeValidation('dateFrom', 'dateTo')})

  dateRangeValidation(firstDate: string, secondDate: string): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const control = form.get(firstDate)?.value as Date;
      const secondControl = form.get(secondDate)?.value as Date;

      if (control < secondControl || control == secondControl ) {
        return null;
      } else {
        const error = { dateRange: 'date range error'}
        return error;
      }
    }
  }

  onClose() {
    this.close.emit();
  }

  handleBudgetAction() {
    if (this.addBudgetForm.valid) {
      this.newBudget = {
        budgetName: this.addBudgetForm.get('budgetName')?.value,
        amount: this.addBudgetForm.get('amount')?.value,
        budgetFor: this.addBudgetForm.get('budgetFor')?.value,
        dateFrom: this.addBudgetForm.get('dateFrom')?.value,
        dateTo: this.addBudgetForm.get('dateTo')?.value,
      }

      this._budgetService.addBudget(this.newBudget);
      this.budgets.push(this.newBudget)
      this.onClose();
    }
  }
}
