import { Component, OnInit } from "@angular/core";
import { Vehicle } from "../classes/vehicle";
import { HttpClientVehicleService } from "../services/http-client-vehicle.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-locate",
  templateUrl: "./locate.component.html",
  styleUrls: ["./locate.component.scss"],
})
export class LocateComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  lat1 = 51.678418;
  lng1 = 7.809707;
  vehicles: Vehicle[] = [];
  markers = [];
  zoom = 11;

  constructor(private vehicleService: HttpClientVehicleService, private router:Router) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    this.getVehicles();
  }

  center: google.maps.LatLngLiteral;

  getVehicles() {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
      data.forEach((vehicle) => {
        this.addMarker(vehicle);
      });
      this.center = {
        lat: data[0].latitude,
        lng: data[0].longitude,
      };
    });
  }
  click(event) {
    console.log(event);
  }

  addMarker(vehicle) {
    console.log(vehicle);
    this.markers.push({
      position: {
        lat: vehicle.latitude,
        lng: vehicle.longitude,
      },
      label: {
        color: "white",
        text: "Vehicle : " + (vehicle.plate + 1),
      },
      title: "Vehicle :  " + (vehicle.plate + 1),
      options: {},
    });
  }

  markerClick(vehicle) {
    this.router.navigateByUrl("/vehicle/"+vehicle.id);
  }
}
