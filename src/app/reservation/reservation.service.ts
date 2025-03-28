import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiURL = 'http://localhost:3001';

  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  //CRUD operations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiURL + '/reservations');
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiURL + `/reservations/${+id}`);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiURL + `/reservations`, reservation);
  }

  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(this.apiURL + `/reservations/${+id}`);
  }

  updateReservation(id: number, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiURL + `/reservations/${+id}`, updatedReservation);
  }
}
