import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UserServiceService} from '../user-service.service'

@Component({
  templateUrl: './loginComponent.html',
  providers: [ UserServiceService ]
})

export class LoginComponent implements OnInit{

  public title = 'app';
  public model: any = {};
  public message: string;

  constructor(
    private userServiceService: UserServiceService,
    private router: Router
  ){}

  ngOnInit(){}

  login() {
    this.userServiceService.login(this.model.email, this.model.password)
      .subscribe(() => {
        this.message = 'success';
        this.router.navigateByUrl('/');
      },  () => {
        this.message = 'error';
      }, () => {
        this.message = 'complete';
      });
  }
}
