import { NgModule } from '@angular/core'
import { FormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import { LoginComponent } from './Components/loginComponent';
import { RegisterComponent } from './Components/registerComponent'

import { RoutingUserModule } from './RountingModule';

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
  providers: []
})

export class UserModule {}
