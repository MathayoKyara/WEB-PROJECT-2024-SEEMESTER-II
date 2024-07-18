import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      artistName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.http.post('http://localhost:8081/api/v1/registration/add', formData).subscribe(response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);  // Redirect to login page
      }, error => {
        console.error('Registration failed', error);
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
