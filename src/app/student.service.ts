import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studentInterface } from './student';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }
  public url = "assets/data/students.json"
  getStudents(): Observable<studentInterface[]> {
   return this.http.get<studentInterface[]>(this.url).pipe(catchError(this.errorHandler)) 
  }

  errorHandler(error:HttpErrorResponse) {
    return throwError(error.message || "Unknown error")
  }
}
