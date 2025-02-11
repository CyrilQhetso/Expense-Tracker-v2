import { Injectable } from '@angular/core';
import { Budget } from '../classes/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  getBudgets(): Budget[] {
     
    let retrievedBudgets: Budget[] = [];
    const storedBudgets = sessionStorage.getItem('budget');

    if (storedBudgets) {
      retrievedBudgets = JSON.parse(storedBudgets!) as Budget[];
    }
    
    return retrievedBudgets;
  }

  addBudget(budget: Budget) {
    let recivedBudget = this.getBudgets();
    recivedBudget.push(budget);
    
    const budgetInString = JSON.stringify(recivedBudget);
    sessionStorage.setItem('budget', budgetInString);
  }
}
