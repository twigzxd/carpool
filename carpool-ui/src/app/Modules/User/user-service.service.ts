import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root',
})

export class UserServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private baseURL:string = 'http://localhost:5000/api/user/';
  public _loggedIn:boolean = false;
  public logged: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.logged = new BehaviorSubject(false);
  }

  login(email: string, password: string):Promise<any> {
    let apiUrl = this.baseURL + 'login';
    return this.http.post<any>(apiUrl,
      {email: email, password: password}, this.httpOptions).toPromise()
      .then(function(response) {
        if(response.success) {
          this._loggedIn = true;
          this.logged.next(true);
        }
      }.bind(this));
  }

  register(payload: any) {
    let apiUrl = this.baseURL + 'register';
    return this.http.post<any>(apiUrl, payload);
  }

  getLoggedIn() {
    return this.logged;
  }

}
