import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  reservation: Reservation = new Reservation();
  constructor(private reservationService: ReservationService,
    private router: Router) { }


  ngOnInit(): void {
  }


  saveReservation(){
    this.reservationService.createReservation(this.reservation).subscribe( data =>{
      console.log(data);
      this.goToReservationList();
    },
    error => console.log(error));
  }

  goToReservationList(){
    this.router.navigate(['/reservations']);
  }
  
  onSubmit(){
    console.log(this.reservation);
    this.saveReservation();
  }

}
