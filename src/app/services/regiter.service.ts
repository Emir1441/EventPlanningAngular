import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegiterService {
  constructor(private http: HttpClient) { }
  registrationForTheEventAsync(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.ApiUrl}/api/registration/`)
  }
  addRegister(registerModel): Observable<any> {
    return this.http.post<any>(`${environment.ApiUrl}/api/registration/`, registerModel)
  }
}
