import { Component, OnInit } from '@angular/core';
// import { UserService } from '../services';
import {UserServiceService} from '../user-service.service'

@Component({
  templateUrl: './loginComponent.html',
  providers: [ UserServiceService ]
  }
)

export class LoginComponent implements OnInit{
  public title = 'app';
  public model: any = {};

  constructor(
    private userServiceService: UserServiceService
  ){}

  ngOnInit(){}

  login() {
    this.userServiceService.login(this.model.email, this.model.password)
      .subscribe();
    // this.userServiceService.login()
  }
}
