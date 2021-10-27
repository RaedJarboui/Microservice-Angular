import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../models/Personnel';


@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private httpClient: HttpClient) { }
  
  getPersonnelList(): Observable<Personnel[]>{
    return this.httpClient.get<Personnel[]>(`http://localhost:8762/personnel-service/personnels`);
  }

  createPersonnel(personnel: Personnel): Observable<Object>{
    return this.httpClient.post(`http://localhost:8762/personnel-service/personnels`, personnel);
  }

  getPersonnelById(id: number): Observable<Personnel>{
    return this.httpClient.get<Personnel>(`http://localhost:8762/personnel-service/personnels/${id}`);
  }

  updatePersonnel(id: number, personnel: Personnel): Observable<Object>{
    return this.httpClient.put(`http://localhost:8762/personnel-service/personnels/${id}`, personnel);
  }

  deletePersonnel(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8762/personnel-service/personnels/${id}`);
  }
}
