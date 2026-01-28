import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  url = '';

  constructor(private http: HttpClient) { }
  enrol(user: User) {
    return this.http.post<any>(this.url, user)
  }
}
