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
    return this.http.post("http://localhost/api/login.php",data);
  }
}
