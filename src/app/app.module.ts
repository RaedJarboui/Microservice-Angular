import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAeroComponent } from './raed/add-aero/add-aero.component';
import { ListAeroComponent } from './raed/list-aero/list-aero.component';
import { DetailAeroComponent } from './raed/detail-aero/detail-aero.component';
import { UpdateAeroComponent } from './raed/update-aero/update-aero.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AddReservationComponent } from './imen/add-reservation/add-reservation/add-reservation.component';
import { DetailReservationComponent } from './imen/detail-reservation/detail-reservation/detail-reservation.component';
import { ListReservationComponent } from './imen/list-reservation/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './imen/update-reservation/update-reservation/update-reservation.component';
import { AddPersonnelComponent } from './najla/add-personnel/add-personnel/add-personnel.component';
import { DetailPersonnelComponent } from './najla/detail-personnel/detail-personnel/detail-personnel.component';
import { ListPersonnelComponent } from './najla/list-personnel/list-personnel/list-personnel.component';
import { UpdatePersonnelComponent } from './najla/update-personnel/update-personnel/update-personnel.component';
const routes: Routes = [
  
  { path: '', component: HomeComponent },

  // AERO
  { path: 'list', component: ListAeroComponent },
  { path: 'add/aero', component: AddAeroComponent },
  { path: 'aeros', component: ListAeroComponent },
  { path: 'detail/aero/:id', component: DetailAeroComponent },
  { path: 'update/aero/:id', component: UpdateAeroComponent },

  //RESERVATION
  { path: 'listReservatiions', component: ListReservationComponent },
  { path: 'add/reservatiions', component: AddReservationComponent },
  { path: 'detail/reservations/:id', component: DetailReservationComponent},
  { path: 'update/reservations/:id', component: UpdateReservationComponent },

  //RESERVATION
  { path: 'listPersonnels', component: ListPersonnelComponent },
  { path: 'add/personnels', component: AddPersonnelComponent },
  { path: 'detail/personnels/:id', component: DetailPersonnelComponent},
  { path: 'update/personnels/:id', component: UpdatePersonnelComponent },


 

  

];

@NgModule({
  declarations: [
    AppComponent,
    AddAeroComponent,
    ListAeroComponent,
    DetailAeroComponent,
    UpdateAeroComponent,
    HomeComponent,
    AddReservationComponent,
    DetailReservationComponent,
    ListReservationComponent,
    UpdateReservationComponent,
    AddPersonnelComponent,
    DetailPersonnelComponent,
    ListPersonnelComponent,
    UpdatePersonnelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
