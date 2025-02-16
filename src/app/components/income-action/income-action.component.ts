import { Component } from '@angular/core';
import { Transaction } from '../../classes/transaction';
import { TrackerService } from '../../services/tracker.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-income-action',
  standalone: false,
  templateUrl: './income-action.component.html',
  styleUrl: './income-action.component.css'
})
export class IncomeActionComponent {

  newTransaction! : Transaction;

  constructor(private _trackerService: TrackerService, private _router: Router) {}

  incomeActionForm: FormGroup = new FormGroup({
    amount : new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
    category : new FormControl('salary'),
    paymentMethod : new FormControl('in cash'),
    date : new FormControl(null, [Validators.required, this.noFutureDateValidator]),
  });

  noFutureDateValidator(control: AbstractControl): ValidationErrors | null {
    const today = new Date();
    const enteredDate =  new Date(control.value);

    if (enteredDate.getTime() > today.getTime()) {
      return { noFutureDate: true }
    }
    return null;
  }

  handleIncomeAction() {
    if (this.incomeActionForm.valid) {
      this.newTransaction = {
        amount : this.incomeActionForm.get('amount')?.value,
        category : this.incomeActionForm.get('category')?.value,
        paymentMethod : this.incomeActionForm.get('paymentMethod')?.value,
        date : this.incomeActionForm.get('date')?.value,
        type : 'income',
      }
      this._trackerService.addTransactiob(this.newTransaction);
    }
    this._router.navigate(['/overview']);
  }
}
