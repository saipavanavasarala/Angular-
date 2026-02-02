import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http: HttpClient) { }

  fetchMobiles() {
    return this.http.get<any>('assets/mobiles.json');
  }
}
