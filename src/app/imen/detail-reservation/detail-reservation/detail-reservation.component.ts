import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})
export class DetailReservationComponent implements OnInit {

  id: number
  reservation: Reservation
  constructor(private route: ActivatedRoute, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.reservation = new Reservation();
    this.reservationService.getReservationById(this.id).subscribe( data => {
      this.reservation = data;
    });
  }
}
