import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  private baseURL:string = 'http://localhost:5000/api/user/';
  private _loggedIn:boolean;

  constructor(private http: HttpClient) {
    this._loggedIn = false;
  }

  login(email: string, password: string):Observable<any> {
    let apiUrl = this.baseURL + 'login';
    return this.http.post<any>(apiUrl,
      {email: email, password: password}, this.httpOptions).pipe(map(
        response => {
          this._loggedIn = true;
          return response;
        }
    ));
  }

  register(payload: any) {
    let apiUrl = this.baseURL + 'register';
    return this.http.post<any>(apiUrl, payload);
  }

  isLoggedIn():boolean {
    return this._loggedIn;
  }
}
