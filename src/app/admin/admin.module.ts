// custom modules
import {UserService} from '../services/user.service';
import {AdminComponent} from './components/admin/admin.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {AdminMenuComponent} from './components/admin-menu/admin-menu.component';

// external modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const AdminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: '', component: AdminMenuComponent, canActivate: [UserService] }
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    LoginComponent,
    SignUpComponent
  ],
  providers: [
    UserService,
  ]
})
export class AdminModule {}
