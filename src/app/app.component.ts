import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calibrator-App';
  userRole: string;
  constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('role');
    localStorage.removeItem('loginData');
    localStorage.removeItem('signUpData');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    if (localStorage.getItem('role')) {
      return true;
    }
    return false;
  }
}
