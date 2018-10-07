import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserModule } from './Modules/User/userModule';
import { UserServiceService } from './Modules/User/user-service.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    // loadChildren: () => UserModule
    loadChildren: './Modules/User/userModule#UserModule'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
