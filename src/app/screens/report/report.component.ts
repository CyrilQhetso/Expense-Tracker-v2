import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: false,
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  expenseChosen = true;
  incomeChosen = false;

  chosenExpense() {
    this.expenseChosen = true;
    this.incomeChosen = false;
  }

 chosenIncome() {
  this.expenseChosen = false;
  this.incomeChosen = true;
 }
}
