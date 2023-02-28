import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItinerariesComponent } from './itineraries.component';
import { FlightsService } from '../services/flights.service';
import { PlanesComponent } from './planes/planes.component';
import { CitiesComponent } from './cities/cities.component';
import { GlightsComponent } from './glights/glights.component';


@NgModule({
  declarations: [
    ItinerariesComponent,
    PlanesComponent,
    CitiesComponent,
    GlightsComponent
  ],
  imports: [
    CommonModule,
    ItinerariesRoutingModule
  ],
  providers: [
    FlightsService,
  ]
})
export class ItinerariesModule { }
