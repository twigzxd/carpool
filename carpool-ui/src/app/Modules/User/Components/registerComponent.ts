import { Component, OnInit } from '@angular/core';

import {UserServiceService} from '../user-service.service';

@Component({
  templateUrl: './registerComponent.html'
})

export class RegisterComponent {

  public model: any = {};

  constructor(
    private userServiceService: UserServiceService
  ){}

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
