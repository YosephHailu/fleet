import { Component, OnInit } from "@angular/core";
import { Vehicle } from "../classes/vehicle";
import { VehicleService } from "../services/vehicle.service";
import { HttpClientVehicleService } from "../services/http-client-vehicle.service";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.scss"],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: HttpClientVehicleService) {}

  ngOnInit() {
    this.getVehicles();
  }
  
  getVehicles() {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
      console.log(data)
    });
  }

  deleteVehicle(vehicle) {
    if (confirm(`Are you sure you went to delete ${vehicle.plate} ?? `)) {
      this.vehicleService.deleteVehicle(vehicle.id).subscribe();
      this.getVehicles();
    }
  }
}
