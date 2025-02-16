import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit{

  constructor(private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
      this._spinner.show();

      setTimeout(() => {
        this._spinner.hide();
      }, 1000);
  }
}
