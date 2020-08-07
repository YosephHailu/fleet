import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { VehicleService } from "./vehicle.service";
import { Observable, throwError } from "rxjs";
import { Vehicle } from "../classes/vehicle";
import { catchError } from "rxjs/operators";

const cudOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class HttpClientVehicleService extends VehicleService {
  constructor(private http: HttpClient) {
    super();
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http
      .get<Vehicle[]>(this.vehiclesUrl)
      .pipe(catchError(this.handelError));
  }
  getVehicle(id: number): Observable<Vehicle> {
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.get<Vehicle>(url).pipe(catchError(this.handelError));
  }
  addVehicle(newVehicle: object): Observable<Vehicle> {
    return this.http
      .post<Vehicle>(this.vehiclesUrl, newVehicle, cudOptions)
      .pipe(catchError(this.handelError));
  }
  deleteVehicle(vehicle: number | Vehicle): Observable<Vehicle> {
    const id = typeof(vehicle) === "number" ? vehicle : vehicle.id;
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.delete<Vehicle>(url).pipe(
      catchError(this.handelError)
    )
  }
  searchVehicle(term: string): Observable<Vehicle[]> {
    throw new Error("Method not implemented.");
  }
  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(this.vehiclesUrl, vehicle, cudOptions).pipe(
      catchError(this.handelError)
    )
  }
  private handelError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
