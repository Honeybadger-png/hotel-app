import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';


@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {
  
  reservations : Reservation[] = [];
  constructor(private reservationService : ReservationService){

  }
  
  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  deleteReservation(id:string){
    this.reservationService.deleteReservation(id).subscribe(()=> {
      console.log("Delete request got processed.")
    });
  }

}
