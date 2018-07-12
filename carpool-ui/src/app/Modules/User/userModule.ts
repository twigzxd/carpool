import { NgModule } from '@angular/core'
import { FormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import { LoginComponent } from './Components/loginComponent';
import { RoutingUserModule } from './RountingModule';
// import { UserService } from './services'
import  {UserServiceService} from './user-service.service'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutingUserModule,
    HttpClientModule,
  ],

  declarations: [
    LoginComponent
  ],

  providers: [
    UserServiceService
  ]
})

export class UserModule {}
