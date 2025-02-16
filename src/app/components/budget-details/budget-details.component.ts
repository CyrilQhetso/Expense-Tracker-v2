import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Budget } from '../../classes/budget';
import { TrackerService } from '../../services/tracker.service';
import { Transaction } from '../../classes/transaction';

@Component({
  selector: 'app-budget-details',
  standalone: false,
  templateUrl: './budget-details.component.html',
  styleUrl: './budget-details.component.css'
})
export class BudgetDetailsComponent implements OnInit{
  @Input() budgets!: Budget[];
  budgetsCards!: Budget[];

  constructor (private _trackerService: TrackerService, private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
      this._spinner.show();
      this.budgetsCards = this.budgets;
      this._spinner.hide();
  }

  calculateProgress(budget: Budget): number {
    const transactionsFiltered = this._trackerService.getTranscationByDataRange(budget.dateFrom, budget.dateTo).
    filter((transaction) => transaction.category === budget.budgetFor);

    const totalSpent = transactionsFiltered.reduce((sum, transction) => sum + transction.amount, 0);
    return Math.min(totalSpent / budget.amount, 1);
  }

  deleteItemDromArray<Budget>(budget: Budget[], itemToDelete: Budget): boolean {
    const BudgetIndex = budget.findIndex((element) => element === itemToDelete);
    if (BudgetIndex !== -1) {
      budget.splice(BudgetIndex, 1);
      sessionStorage.setItem('budget', JSON.stringify(budget));
      return true;
    } else {
      return false;
    }
  }
}
