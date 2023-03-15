import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/User';

@Injectable({
  providedIn: 'root'
})
export class LoginSerivceService {
  private baseUrl = 'http://localhost:8080';
  // User, /getemp


  constructor(private http:HttpClient) { }
  // REST API endpoint for Spring Boot
  // where Spring Boot gets integrated
  // backend gets integrated
  
  // code or methods that helps to connect with REST API 
  // DB is taken care by REST API (beckend-- Spring Boot)



  // logic to read the data of the call
  getUserList() : Observable<any>{
    return this.http.get(`${this.baseUrl}` + '/getuser');  //will changern 
  }



  // POST()
  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/adduser', user);//rest API call post method
  }





  // need to be invoked from TS file of any component where you need requirement

  



}
