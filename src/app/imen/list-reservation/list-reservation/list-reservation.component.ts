import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  reservation: Reservation[];

  constructor(private reservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getReservations();
  }

  private getReservations(){
    this.reservationService.getReservationList().subscribe(data => {
      this.reservation = data;
      console.log(data)
    });
  }

  ReservationDetails(id: number){
    this.router.navigate(['detail/aero', id]);
  }

  updateReservation(id: number){
    this.router.navigate(['update/aero', id]);
  }

  deleteReservation(id: number){
    this.reservationService.deleteReservation(id).subscribe( data => {
      console.log(data);
      this.getReservations();
      //this.router.navigate(['aeros']);

    })
  }

}
