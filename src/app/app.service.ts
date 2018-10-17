import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient, private router:Router) { }

  authorize(data:any):any{
    console.log(data);
    // this.http.post("http://10.10.1.151:3000/users/add",data)
    // .subscribe((response) =>{
    //     return response;
    // });
  }
}
