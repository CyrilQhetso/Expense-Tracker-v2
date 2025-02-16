import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Expense-Tracker';

  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  showButton = true;

  constructor(private _router: Router) {}

  ngOnInit(): void {
      this._router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.outlet.deactivate();
        }
        if (event instanceof NavigationEnd) {
          const url = event.url;
          this.showButton = url ! == '/newtranscation';
        }
      });
  }
}
