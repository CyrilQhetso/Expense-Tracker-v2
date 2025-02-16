import { Component } from '@angular/core';
import { Transaction } from '../../classes/transaction';
import { TrackerService } from '../../services/tracker.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-action',
  standalone: false,
  templateUrl: './expense-action.component.html',
  styleUrl: './expense-action.component.css'
})
export class ExpenseActionComponent {

  newTransaction!: Transaction;

  constructor(private _tackerService: TrackerService, private _router: Router) {}

  expenseActionForm: FormGroup = new FormGroup({
    amount : new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
    category : new FormControl('food and drinks'),
    paymentMethod : new FormControl('in cash'),
    date : new FormControl(null , [Validators.required, this.noFutureDateValidation]),
  });

  noFutureDateValidation(control: AbstractControl): ValidationErrors | null {
    const today = new Date();
    const enteredDate = new Date(control.value);

    if (enteredDate.getTime() > today.getTime()) {
      return { noFutureDate: true}
    }
    return null;
  }

  handleExpenseAction() {
    if (this.expenseActionForm.valid) {
      this.newTransaction = {
        amount : this.expenseActionForm.get('amount')?.value,
        category : this.expenseActionForm.get('category')?.value,
        paymentMethod : this.expenseActionForm.get('paymentMethod')?.value,
        date : this.expenseActionForm.get('date')?.value,
        type : 'expense',
      }
      this._tackerService.addTransactiob(this.newTransaction);
    }
    this._router.navigate(['/overview']);
  }
}
