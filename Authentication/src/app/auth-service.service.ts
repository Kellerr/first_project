import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post(`${baseUrl} user/login`,data);

  }
}
