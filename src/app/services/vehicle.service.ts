import { Injectable } from "@angular/core";
import { Observable, ObservableLike } from 'rxjs';
import { Vehicle } from '../classes/vehicle';

@Injectable({
  providedIn: "root",
})
export abstract class VehicleService {
  identification = 100;
  vehiclesUrl = "api/vehicles";

  abstract getVehicles(): Observable<Vehicle[]>;
  abstract getVehicle(id: number): Observable<Vehicle>;
  abstract addVehicle(vehicle: object): Observable<Vehicle>;
  abstract deleteVehicle(vehicle: Vehicle | number): Observable<Vehicle>;
  abstract searchVehicle(term: string): Observable<Vehicle[]>;
  abstract updateVehicle(vehicle: Vehicle): Observable<Vehicle>;
}
