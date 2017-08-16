import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  passwordFail = false;
  email: string;
  password: string;
  password2: string;
  registerForm: FormGroup;

  constructor(private router: Router,
              private userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  signUp(): void {
    if (this.password !== this.password2) {
      this.passwordFail = true;
    } else {
      this.passwordFail = false;
      this.user._email = this.registerForm.get('email').value;
      this.user._password = this.registerForm.get('password').value;
      this.userService.register(this.user);
      this.userService.verifyUser();
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

}
