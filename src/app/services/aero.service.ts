import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aero } from '../models/Aero';

@Injectable({
  providedIn: 'root'
})
export class AeroService {
  constructor(private httpClient: HttpClient) { }
  
  getAeroList(): Observable<Aero[]>{
    return this.httpClient.get<Aero[]>(`http://localhost:8762/aero-service/api/aero/`);
  }

  createAero(aero: Aero): Observable<Object>{
    return this.httpClient.post(`http://localhost:8762/aero-service/api/aero/`, aero);
  }

  getAeroById(id: number): Observable<Aero>{
    return this.httpClient.get<Aero>(`http://localhost:8762/aero-service/api/aero/${id}`);
  }

  updateAero(id: number, aero: Aero): Observable<Object>{
    return this.httpClient.put(`http://localhost:8762/aero-service/api/aero/${id}`, aero);
  }

  deleteAero(id: number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8762/aero-service/api/aero/${id}`);
  }
  
}
