import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aero } from 'src/app/models/Aero';
import { AeroService } from 'src/app/services/aero.service';

@Component({
  selector: 'app-update-aero',
  templateUrl: './update-aero.component.html',
  styleUrls: ['./update-aero.component.css']
})
export class UpdateAeroComponent implements OnInit {

  id: number;
  aero: Aero = new Aero();
  constructor(private aeroService: AeroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.aeroService.getAeroById(this.id).subscribe(data => {
      this.aero = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.aeroService.updateAero(this.id, this.aero).subscribe( data =>{
      this.goToAeroList();
    }
    , error => console.log(error));
  }

  goToAeroList(){
    this.router.navigate(['/aeros']);
  }

}
