import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // In a real application, you would handle authentication here
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid login form');
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  resetPassword(): void {
    console.log('Reset password');
  }
}
