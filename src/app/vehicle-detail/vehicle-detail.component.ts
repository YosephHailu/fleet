import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpClientVehicleService } from "../services/http-client-vehicle.service";
import { Vehicle } from "../classes/vehicle";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.scss"],
})
export class VehicleDetailComponent implements OnInit {
  vehicle = {};

  constructor(
    private vehicleService: HttpClientVehicleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.getVehicle(params.id);
      }
    });
  }

  vehicleSubscription: Subscription;
  routeSubscription: Subscription;

  ngOnDestroy(): void {
    if (this.vehicleSubscription) this.vehicleSubscription.unsubscribe();
  }

  getVehicle(id) {
    this.vehicleSubscription = this.vehicleService
      .getVehicle(id)
      .subscribe((data) => {
        console.log(data);
        this.vehicle = data;
      });
  }
}
