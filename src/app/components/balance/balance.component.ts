import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';

@Component({
  selector: 'app-balance',
  standalone: false,
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit{

    totalExpense!: number;
    totalIncome!: number;
    totalAmount!: number;

  constructor(private _trackerService: TrackerService) {}

  ngOnInit() {
      this.totalExpense = this._trackerService.calculateTotals().totalExpense;
      this.totalIncome = this._trackerService.calculateTotals().totalIncome;
      this.totalAmount = this._trackerService.calculateTotals().totalAmount;
  }
}
