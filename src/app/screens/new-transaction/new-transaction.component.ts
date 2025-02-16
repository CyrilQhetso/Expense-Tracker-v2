import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-transaction',
  standalone: false,
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.css'
})
export class NewTransactionComponent implements OnInit{

  expenseActionChosen =  true;
  incomeActionChosen = false;

  constructor(private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
      this._spinner.show();
      setTimeout(() => {
        this._spinner.hide()
      }, 1000);
  }

  choseExpenseAction() {
    this.expenseActionChosen = true;
    this.incomeActionChosen = false;
  }

  choseIncomeAction() {
    this.expenseActionChosen = false;
    this.incomeActionChosen = true;
  }
}
