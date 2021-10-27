import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aero } from 'src/app/models/Aero';
import { AeroService } from 'src/app/services/aero.service';

@Component({
  selector: 'app-list-aero',
  templateUrl: './list-aero.component.html',
  styleUrls: ['./list-aero.component.css']
})
export class ListAeroComponent implements OnInit {

  aeros: Aero[];

  constructor(private aeroService: AeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAeros();
  }

  private getAeros(){
    this.aeroService.getAeroList().subscribe(data => {
      this.aeros = data;
      console.log(data)
    });
  }

  AeroDetails(id: number){
    this.router.navigate(['detail/aero', id]);
  }

  updateAero(id: number){
    this.router.navigate(['update/aero', id]);
  }

  deleteAero(id: number){
    this.aeroService.deleteAero(id).subscribe( data => {
      console.log(data);
      this.getAeros();
      //this.router.navigate(['aeros']);

    })
  }

}
