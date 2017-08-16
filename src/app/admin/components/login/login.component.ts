import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {log} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = new User();

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(): void{
    this.user._email = this.loginForm.get('username').value;
    this.user._password = this.loginForm.get('password').value;
    console.log(`${this.user._email}`);
    this.userService.login(this.user);
    this.userService.verifyUser();
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
    this.router.navigate(['/']);
  }

}
