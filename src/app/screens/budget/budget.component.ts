import { Component, OnInit } from '@angular/core';
import { Budget } from '../../classes/budget';
import { BudgetService } from '../../services/budget.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-budget',
  standalone: false,
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit{

  showDialog = false;
  budgets! : Budget[];

  constructor(private _budgetService: BudgetService, private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
      this._spinner.show();
      this.budgets = this._budgetService.getBudgets();
      setTimeout(() => {
        this._spinner.hide();
      }, 1000);
  }

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
}
