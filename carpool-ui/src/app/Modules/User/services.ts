// import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UserModule } from './userModule';


@Injectable()

export class UserService {

  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  private baseURL:string = 'localhost:5000/api/user/';
  // private userInfo: object = {};
  // private subscription: Subscription;

  constructor(
    private isLoggedIn: boolean = false,
    // private http: HttpClient
  ) {}

  // login(email: string, password: string) {
  //   let apiUrl = this.baseURL + 'login';
  //   // return this.http.post<any>(apiUrl,
  //   //   {email: email, password: password}, this.httpOptions);
  // }

}
