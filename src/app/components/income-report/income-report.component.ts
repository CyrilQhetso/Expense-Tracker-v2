import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../classes/transaction';
import { TrackerService } from '../../services/tracker.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-income-report',
  standalone: false,
  templateUrl: './income-report.component.html',
  styleUrl: './income-report.component.css'
})
export class IncomeReportComponent implements OnInit{

  transactionArr! : Transaction[];
  chartData : any = {};
  descendingLabelsArr!: string [];
  canvas! : any;

  constructor(private _trackerService: TrackerService, private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
      this._spinner.show();
      this.transactionArr = this._trackerService.getTransactions();
      setTimeout(() => {
        this._spinner.hide();
      }, 1000);

      this.prepareChartData();
      this.canvas =  document.getElementById('transactionChartIncome') as HTMLCanvasElement;

      if (this.canvas) {
        const canvasContent = this.canvas.getContext('2d');

        new Chart(canvasContent!, {
          options : {
            responsive : true,
            maintainAspectRatio : true
          },
          type : 'doughnut',
          data : this.chartData,
        });
      }
  }

  prepareChartData() {
    this.transactionArr.sort((a, b) => b.amount - a.amount);

    let categoryAmounts : Record<string, number> = {};

    for (const transaction of this.transactionArr) {
      if (transaction.type === 'income') {
        const category = transaction.category;
        const amount = transaction.amount;
        categoryAmounts[category] = (categoryAmounts[category] || 0) + amount;
      }
    }

    const categoryLabels = Object.keys(categoryAmounts);
    const categoryValues = Object.values(categoryAmounts);

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
