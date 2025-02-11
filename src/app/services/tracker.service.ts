import { Injectable } from '@angular/core';
import { Transaction } from '../classes/transaction';
import { transition } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor() { }

  getTransactions(): Transaction[] {
    
    let  retrivedTranscations : Transaction[] = [];
    const storedTransactions = sessionStorage.getItem('transactions');
    if (storedTransactions) {
      retrivedTranscations = JSON.parse(storedTransactions!) as Transaction[];
    }

    return retrivedTranscations;
  }

  addTransactiob(transaction: Transaction) {
    
    let recivedTransactions = this.getTransactions();
    recivedTransactions.push(transaction);
    const transactionInString = JSON.stringify(recivedTransactions);

    sessionStorage.setItem('transaction', transactionInString);
  }

  calculateTotals(): {totalExpense: number, totalIncome: number, totalAmount: number} {
    
    let totalExpense = 0;
    let totalIncome = 0;

    for (const transaction of this.getTransactions()) {
      if (transaction.type === 'expense') {
        totalExpense += transaction.amount;
      } else {
        totalIncome += transaction.amount;
      }
    }

    const totalAmount = totalIncome - totalExpense;
    return { totalExpense, totalIncome, totalAmount };
  }

  getTranscationByDataRange(startDate: Date, endDate: Date): Transaction[] {
    
    return this.getTransactions().filter(transaction => {
      const transactionDate = new Date(transaction.date);

      return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
    });
  }
}
