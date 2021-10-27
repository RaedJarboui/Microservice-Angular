import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personnel } from 'src/app/models/Personnel';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-detail-personnel',
  templateUrl: './detail-personnel.component.html',
  styleUrls: ['./detail-personnel.component.css']
})
export class DetailPersonnelComponent implements OnInit {

  id: number
  personnel: Personnel
  constructor(private route: ActivatedRoute, private personnelService: PersonnelService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personnel = new Personnel();
    this.personnelService.getPersonnelById(this.id).subscribe( data => {
      this.personnel = data;
    });
  }

}
