import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.scss']
})
export class EmployeeMenuComponent {
  logout() {
    localStorage.clear();

  }
}
