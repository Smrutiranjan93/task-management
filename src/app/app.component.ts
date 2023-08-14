import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student';
  isHeaderAndFooterVisible = true; // Default value is true to show the header and footer

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHeaderAndFooterVisible = !event.url.startsWith('/admin') && !event.url.startsWith('/employee') && !event.url.startsWith('/user');
      }
    });
  }
}
