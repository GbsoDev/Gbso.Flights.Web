import { City } from "./city";
import { Plane } from "./plane";

export interface Flight {
  id?: number;
  plane: Plane;
  originCity: City;
  destinationCity: City;
  date: Date;
  DepartureTime: Date;
  ArrivalTime: Date;
  Price: number;
}
