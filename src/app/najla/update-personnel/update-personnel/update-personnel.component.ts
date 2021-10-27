import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnel } from 'src/app/models/Personnel';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-update-personnel',
  templateUrl: './update-personnel.component.html',
  styleUrls: ['./update-personnel.component.css']
})
export class UpdatePersonnelComponent implements OnInit {

  id: number;
  personnel: Personnel = new Personnel();
  constructor(private personnelService: PersonnelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personnelService.getPersonnelById(this.id).subscribe(data => {
      this.personnel = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.personnelService.updatePersonnel(this.id, this.personnel).subscribe( data =>{
      this.goToAeroList();
    }
    , error => console.log(error));
  }

  goToAeroList(){
    this.router.navigate(['/personnels']);
  }


}
