import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aero } from 'src/app/models/Aero';
import { AeroService } from 'src/app/services/aero.service';

@Component({
  selector: 'app-add-aero',
  templateUrl: './add-aero.component.html',
  styleUrls: ['./add-aero.component.css']
})
export class AddAeroComponent implements OnInit {

  aero: Aero = new Aero();
  constructor(private aeroService: AeroService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAero(){
    this.aeroService.createAero(this.aero).subscribe( data =>{
      console.log(data);
      this.goToAeroList();
    },
    error => console.log(error));
  }

  goToAeroList(){
    this.router.navigate(['/aeros']);
  }
  
  onSubmit(){
    console.log(this.aero);
    this.saveAero();
  }

}
