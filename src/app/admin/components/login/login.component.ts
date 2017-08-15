import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(): void{
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp(): void {
    this.router.navigate(['/admin/signup']);
  }

  cancel(): void {
    this.router.navigate(['/admin']);
  }

}
