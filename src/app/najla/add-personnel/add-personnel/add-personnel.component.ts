import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personnel } from 'src/app/models/Personnel';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent implements OnInit {

  personnel: Personnel = new Personnel();
  constructor(private personnelService: PersonnelService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePersonnel(){
    this.personnelService.createPersonnel(this.personnel).subscribe( data =>{
      console.log(data);
      this.goToPersonnelList();
    },
    error => console.log(error));
  }

  goToPersonnelList(){
    this.router.navigate(['/personnels']);
  }
  
  onSubmit(){
    console.log(this.personnel);
    this.savePersonnel();
  }


}
