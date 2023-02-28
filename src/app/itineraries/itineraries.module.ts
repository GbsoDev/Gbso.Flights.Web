import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItinerariesComponent } from './itineraries.component';
import { FlightsService } from '../services/flights.service';
import { PlaneService } from '../services/plane.service';
import { CityService } from '../services/city.service';
import { FlightsComponent } from './flights/flights.component';
import { PlanesComponent } from './planes/planes.component';
import { CitiesComponent } from './cities/cities.component';


@NgModule({
  declarations: [
    ItinerariesComponent,
    FlightsComponent,
    PlanesComponent,
    CitiesComponent
  ],
  imports: [
    CommonModule,
    ItinerariesRoutingModule
  ],
  providers: [
    FlightsService,
    PlaneService,
    CityService
  ]
})
export class ItinerariesModule { }
