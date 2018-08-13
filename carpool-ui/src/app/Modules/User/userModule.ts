import { NgModule } from '@angular/core'
import { FormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import { LoginComponent } from './Components/loginComponent';
import { RegisterComponent } from './Components/registerComponent'

import { RoutingUserModule } from './RountingModule';
import  {UserServiceService} from './user-service.service'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutingUserModule,
    HttpClientModule,
  ],

  declarations: [
    LoginComponent,
    RegisterComponent
  ],

  providers: [
    UserServiceService
  ]
})

export class UserModule {}
