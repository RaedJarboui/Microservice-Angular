import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aero } from 'src/app/models/Aero';
import { AeroService } from 'src/app/services/aero.service';

@Component({
  selector: 'app-detail-aero',
  templateUrl: './detail-aero.component.html',
  styleUrls: ['./detail-aero.component.css']
})
export class DetailAeroComponent implements OnInit {

  id: number
  aero: Aero
  constructor(private route: ActivatedRoute, private aeroService: AeroService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.aero = new Aero();
    this.aeroService.getAeroById(this.id).subscribe( data => {
      this.aero = data;
    });
  }

}
