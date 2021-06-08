import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  constructor(private http: HttpClient) { }
  confirmation(userId: string, code: string): Observable<any> {
    let params = new HttpParams({ encoder: new CustomEncoder() })
    params = params.append('userId', userId);
    params = params.append('code', code);
    return this.http.get<any>(`${environment.ApiUrl}/api/registration/`, { params: params })
  }
}
export class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}