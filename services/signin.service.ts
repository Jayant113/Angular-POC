import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  url = "http:////localhost:3306/ecommerse";

  constructor(private http:HttpClient) { }

  register(credentials) {
    return this.http.post(`${this.url}/signup`,credentials,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
