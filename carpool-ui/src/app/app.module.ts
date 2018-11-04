import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { UserModule } from './Modules/User/userModule';
import {PostModule} from './Modules/Post/postModule'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'User',
    loadChildren: () => UserModule
  },
  {
    path: 'Post',
    loadChildren: () => PostModule
  }
];

@NgModule({
  imports: [
    BrowserModule,
    UserModule,
    PostModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
