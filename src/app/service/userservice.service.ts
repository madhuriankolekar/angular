import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

 [x: string]: any;
 
private API_URL=environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  login(user: any):Observable<any>{
    console.log(user);
    return this.http.post<any>(this.API_URL+ 'users/login',user,this.httpOptions);
  }


  registration(user: any):Observable<any>{
    console.log(user);
    return this.http.post<any>(this.API_URL +'users/register',user, this.httpOptions);
  }
  forgetpassword(user:any):Observable<any>{
    console.log(user);
    return  this.http.post<any>(this.API_URL+'users/forgetpassword',user,this.httpOptions);
  }

  resetPassword(user: any):Observable<any> {
    return this.http.post<any>(this.API_URL + 'users/resetpassword', user);
  }
  
}
