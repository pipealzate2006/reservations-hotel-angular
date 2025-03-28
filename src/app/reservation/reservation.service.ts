import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    let savedReservarions = localStorage.getItem('reservations');
    this.reservations = savedReservarions ? JSON.parse(savedReservarions) : [];
  }

  //CRUD operations
  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: number): Reservation | undefined {
    return this.reservations.find((reservation) => reservation.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = this.reservations.length + 1;

    this.reservations.push(reservation);
    console.log('Reservation added:', this.reservations);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: number): void {
    let index = this.reservations.findIndex(
      (reservation) => reservation.id === id
    );
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: number, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(
      (reservation) => reservation.id === id
    );
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
