import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

 getHeaders() {
   const token = localStorage.getItem('token');
   return token ? new HttpHeaders().set('Authrization', token) : null;
 }

  get(link: string) {
    return this.http.get(link).toPromise();
  }

  post(link: string, body: any) {
    return this.http.post(link, body).toPromise();
  }
}
