import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, RouterModule, HomeComponent],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id);
  }
}
