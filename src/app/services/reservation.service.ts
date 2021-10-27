import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private httpClient: HttpClient) { }
  
  getReservationList(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(`http://localhost:8762/reservation-service/reservations`);
  }

  createReservation(reservation: Reservation): Observable<Object>{
    return this.httpClient.post(`http://localhost:8762/reservation-service/reservations/`, reservation);
  }

  getReservationById(id: number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`http://localhost:8762/reservation-service/reservations/${id}`);
  }

  updateReservation(id: number, reservation: Reservation): Observable<Object>{
    return this.httpClient.put(`http://localhost:8762/reservation-service/reservations/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8762/reservation-service/reservations/${id}`);
  }
  
}
