import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './screens/overview/overview.component';
import { BudgetComponent } from './screens/budget/budget.component';
import { ReportComponent } from './screens/report/report.component';
import { NewTransactionBTNComponent } from './components/new-transaction-btn/new-transaction-btn.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent, title: 'Overview' },
  { path: 'budget', component: BudgetComponent, title: 'Budget' },
  { path: 'report', component: ReportComponent, title: 'Report' },
  { path: 'newtransaction', component: NewTransactionBTNComponent, title: 'New Transaction'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
