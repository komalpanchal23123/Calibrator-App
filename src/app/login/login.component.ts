import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {}
  loginData: any;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    } else {
      console.log('form error');
    }
  }

  onLogin() {
    this.loginData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('pwd').value,
    };

    console.log('--------login', this.loginData);

    this.loginService.getLogin(this.loginData).subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
    });
  }
}
