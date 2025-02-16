import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Transaction } from '../../classes/transaction';
import { TrackerService } from '../../services/tracker.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-expense-report',
  standalone: false,
  templateUrl: './expense-report.component.html',
  styleUrl: './expense-report.component.css'
})
export class ExpenseReportComponent implements OnInit{

  transactionsArr! : Transaction[];
  chartData: any = {};
  descendingLabelsArr!: string[];
  canvas!: any;

  constructor(private _trackerSercive: TrackerService, private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
      this._spinner.show();
      this.transactionsArr = this._trackerSercive.getTransactions();
      setTimeout(() => {
        this._spinner.hide();
      }, 0);

      this.canvas = document.getElementById('transactionChartExpense') as HTMLCanvasElement;
      this.prepareChartData();

      if (this.canvas) {
        const canvasContent = this.canvas.getContext('2d');

        new Chart(canvasContent!, {
          options : { responsive: true, maintainAspectRatio: true},
          type : 'doughnut',
          data : this.chartData,
        });
      } else {
        console.error('Canvas element not found!');
     }
  }

  prepareChartData() {
    this.transactionsArr.sort((a, b) => b.amount - a.amount);
    
    let categoryAmount: Record<string, number> = {};

    for (const transaction of this.transactionsArr) {
      if (transaction.type === 'expense') {
        const category = transaction.category;
        const amount = transaction.amount;
        categoryAmount[category] = (categoryAmount[category] || 0) + amount;
      }
    }

    const categoryLabels = Object.keys(categoryAmount);
    const categoryValues = Object.values(categoryAmount);

    const topThreeLabels = categoryLabels.filter((_, i) => i < 3);
    this.descendingLabelsArr = topThreeLabels;

    this.chartData = {
      labels : categoryLabels,
      datasets : [
        {
          data : categoryValues,
        },
      ],
    };
  }
}
