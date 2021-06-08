import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl: string = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  getAllEvent(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${environment.ApiUrl}/api/event/`)
  }

  getEventById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${environment.ApiUrl}/api/event/${id}`)
  }

  addEvent(eventModel): Observable<any> {
    return this.http.post<any>(`${environment.ApiUrl}/api/event/`, eventModel)
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.ApiUrl}/api/event/${id}`)
  }

  editEvent(eventModel): Observable<EventModel> {
    return this.http.patch<EventModel>(`${environment.ApiUrl}/api/event/`, eventModel)
  }

}
