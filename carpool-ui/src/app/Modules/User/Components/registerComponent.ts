import { Component, OnInit } from '@angular/core';

import {UserServiceService} from '../user-service.service'
import {p} from "../../../../../node_modules/@angular/core/src/render3";

@Component({
  templateUrl: './registerComponent.html'
})

export class RegisterComponent implements OnInit{

  public model: any = {};

  constructor(
    private userServiceService: UserServiceService
  ){}

  ngOnInit(){}

  register() {

    let payload = {
      name: this.model.name,
      email: this.model.email,
      password: this.model.password,
      password2: this.model.password2
    };

    this.userServiceService.register(payload)
      .subscribe(() => {

      }, () => {

      }, () => {

      })

  }

}
