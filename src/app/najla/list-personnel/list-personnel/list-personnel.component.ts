import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from 'src/app/models/Personnel';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrls: ['./list-personnel.component.css']
})
export class ListPersonnelComponent implements OnInit {

  personnels: Personnel[];

  constructor(private personnelService: PersonnelService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPersonnels();
  }

  private getPersonnels(){
    this.personnelService.getPersonnelList().subscribe(data => {
      this.personnels = data;
      console.log(data)
    });
  }

  PersonnelDetails(id: number){
    this.router.navigate(['detail/personnel', id]);
  }

  updatePersonnel(id: number){
    this.router.navigate(['update/personnel', id]);
  }

  deletePersonnel(id: number){
    this.personnelService.deletePersonnel(id).subscribe( data => {
      console.log(data);
      this.getPersonnels();
      //this.router.navigate(['aeros']);

    })
  }


}
