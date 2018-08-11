import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  private httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json'}
      )
  };

  private baseURL:string = 'http://localhost:5000/api/user/';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let apiUrl = this.baseURL + 'login';
    return this.http.post<any>(apiUrl,
      {email: email, password: password}, this.httpOptions);
    // return this.http.get<any>(apiUrl, this.httpOptions);
  }
}
