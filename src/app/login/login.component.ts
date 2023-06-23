import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NotificationService } from '../notification.service';
import { AuthService } from '../auth.service';
import { userResponse } from '../interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private notifyService: NotificationService
  ) {}

  loginData: any;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form submitted');
      this.onLogin();
    } else {
      this.notifyService.showError(
        'Please enter fields before submitting',
        'Error'
      );
    }
  }

  onLogin() {
    this.loginData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };

    //console.log('--------login', this.loginData);

    this.loginService.getLogin(this.loginData).subscribe(
      (res: userResponse) => {
        // console.log('res', res.data.user.role);
        this.router.navigate(['/dashboard']);
        this.authService.setLocalStorage(
          'role',
          res.data.user?.role.toString()
        );
        localStorage.setItem('loginData', JSON.stringify(this.loginData));
        this.notifyService.showSuccess(
          'Logged In successfully !!!',
          'SUCCESS !!!'
        );
      },
      (error) => {
        //console.log('error', error.error.message);
        this.notifyService.showSuccess(error.error.message, 'FAILURE !!!');
      }
    );
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
