import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './Modules/User/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  title = 'app';
  isLoggedIn: boolean = false;

  constructor(
    private userServiceService: UserServiceService,
  ){}

  ngOnInit() {
    this.userServiceService.getLoggedIn().subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }
}
