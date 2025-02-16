import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../classes/transaction';
import { TrackerService } from '../../services/tracker.service';

@Component({
  selector: 'app-transactions',
  standalone: false,
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  transactionsTable! : Transaction[];
  categorySearch!: string;
  paymentSearch!: string;
  amountSearch?: number;
  dateFromSearch?: Date;
  dateToSearch?: Date;

  constructor(private _trackerService: TrackerService) {}

 ngOnInit(): void {
   this.transactionsTable = this._trackerService.getTransactions();  
 }

 clearSearch() {
  this.categorySearch = ' ';
  this.paymentSearch = ' ';
  this.amountSearch = undefined;
  this.dateFromSearch = undefined;
  this.dateToSearch = undefined;
 }
}
