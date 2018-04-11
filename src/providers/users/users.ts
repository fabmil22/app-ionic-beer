import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';




@Injectable()
export class UsersProvider {


  url= "https://randomuser.me/api/?results=50"

  constructor(public http: HttpClient) {
  
  }


 

  getUserall():Observable<any>{
    return this.http.get(this.url);
     }
  


}
