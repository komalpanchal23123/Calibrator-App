import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private notifyService: NotificationService
  ) {}

  // signUp: SignUp;
  signUpForm: FormGroup;
  signupData: any;

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      // console.log('Signup form submitted');
      this.onSignUp();
    } else {
      this.notifyService.showError(
        'Please enter fields before submitting',
        'Error'
      );
    }
  }

  onSignUp() {
    this.signupData = {
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
      confirmPassword: this.signUpForm.get('confirmPassword').value,
    };
    //console.log('=======signUp', this.signupData);

    this.signUpService.getSignUp(this.signupData).subscribe(
      (res) => {
        res = this.router.navigate(['/dashboard']);
        localStorage.setItem('SignUpData', JSON.stringify(this.signupData));
        this.notifyService.showSuccess(
          'Signed Up successfully !!!',
          'SUCCESS !!!'
        );
      },
      (error) => {
        //console.log('error', error);
        this.notifyService.showSuccess(error.error.message, 'FAILURE !!!');
      }
    );
  }

  private buildForm() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
}
