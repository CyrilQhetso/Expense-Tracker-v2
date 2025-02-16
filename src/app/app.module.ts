import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { BudgetComponent } from './screens/budget/budget.component';
import { LongPressDirective } from './directives/long-press.directive';
import { AmountSearchPipe } from './pipes/amount-search.pipe';
import { CategorySearchPipe } from './pipes/category-search.pipe';
import { DateSearchPipe } from './pipes/date-search.pipe';
import { PaymentSearchPipe } from './pipes/payment-search.pipe';
import { NewTransactionComponent } from './screens/new-transaction/new-transaction.component';
import { OverviewComponent } from './screens/overview/overview.component';
import { ReportComponent } from './screens/report/report.component';
import { BudgetDetailsComponent } from './components/budget-details/budget-details.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ExpenseActionComponent } from './components/expense-action/expense-action.component';
import { ExpenseReportComponent } from './components/expense-report/expense-report.component';
import { IncomeActionComponent } from './components/income-action/income-action.component';
import { IncomeReportComponent } from './components/income-report/income-report.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewTransactionBTNComponent } from './components/new-transaction-btn/new-transaction-btn.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    BudgetComponent,
    LongPressDirective,
    AmountSearchPipe,
    CategorySearchPipe,
    DateSearchPipe,
    PaymentSearchPipe,
    NewTransactionComponent,
    OverviewComponent,
    ReportComponent,
    BudgetDetailsComponent,
    DialogComponent,
    ExpenseActionComponent,
    ExpenseReportComponent,
    IncomeActionComponent,
    IncomeReportComponent,
    NavbarComponent,
    NewTransactionBTNComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
