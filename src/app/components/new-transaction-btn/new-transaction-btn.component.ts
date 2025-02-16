import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transaction-btn',
  standalone: false,
  templateUrl: './new-transaction-btn.component.html',
  styleUrl: './new-transaction-btn.component.css'
})
export class NewTransactionBTNComponent {

  hideLabel = true;

  toggleLabel() {
    this.hideLabel = false;
    setTimeout(() => {
      this.hideLabel = true;
    }, 200);
  }
}
