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
const routes: Routes = [
  { path: '', component: ListAeroComponent },
  { path: 'add/aero', component: AddAeroComponent },
  { path: 'aeros', component: ListAeroComponent },
  { path: 'detail/aero/:id', component: DetailAeroComponent },
  { path: 'update/aero/:id', component: UpdateAeroComponent },


 

  

];

@NgModule({
  declarations: [
    AppComponent,
    AddAeroComponent,
    ListAeroComponent,
    DetailAeroComponent,
    UpdateAeroComponent
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
