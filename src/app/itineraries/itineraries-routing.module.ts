import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { FlightsComponent } from './flights/flights.component';
import { ItinerariesComponent } from './itineraries.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [
  { path: '', component: ItinerariesComponent },
  { path: 'flights', component: FlightsComponent},
  { path: 'planes', component: PlanesComponent},
  { path: 'cities', component: CitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinerariesRoutingModule { }
