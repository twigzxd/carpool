import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    
    private baseURL:string = 'http://localhost:5000/api/post/';
    private _loggedIn:boolean;

    constructor(private _http: HttpClient) {
    this._loggedIn = false;
    }


    getStatus():Observable<any> {
        let apiUrl = this.baseURL + 'status';
        return this._http.get(apiUrl);
    }

    submit(userData:any){
        let apiUrl = this.baseURL + 'newcarpooloffer';
        return this._http.post<any>(apiUrl,userData,this.httpOptions).pipe(map(
            response => {
              this._loggedIn = true;
              return response;
            }
        ));
    }
}