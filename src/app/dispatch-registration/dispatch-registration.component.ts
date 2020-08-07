import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClientVehicleService } from "../services/http-client-vehicle.service";
import { Vehicle } from "../classes/vehicle";
import { HttpClientDispatchService } from "../services/http-client-dispatch.service";
import { Subscribable, Subscription } from "rxjs";
import { DispatchService } from "../services/dispatch.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Dispatch } from "../classes/dispatch";

@Component({
  selector: "app-dispatch-registration",
  templateUrl: "./dispatch-registration.component.html",
  styleUrls: ["./dispatch-registration.component.scss"],
})
export class DispatchRegistrationComponent implements OnInit {
  lng = 38.7578;
  lat = 8.9806;

  edit = false;
  vehicles: Vehicle[] = [];
  center: google.maps.LatLngLiteral;
  dispatch: Dispatch;

  dispatchForm = new FormGroup({
    id: new FormControl(""),
    vehicle_id: new FormControl(""),
    plate: new FormControl(""),
    odometer_value: new FormControl(),
    driver: new FormControl(""),
    reason: new FormControl(""),
    end_longitude: new FormControl(0),
    end_latitude: new FormControl(0),
  });

  dispatchSubscription: Subscription;
  vehicleSubscription: Subscription;
  routeSubscription: Subscription;
  constructor(
    private vehicleService: HttpClientVehicleService,
    private dispatchService: HttpClientDispatchService,
    private dispatchIdService: DispatchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.edit = true;
        this.getDispatch(params.id);
      }
    });

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
    });
  }

  getDispatch(id) {
    console.log(id);
    this.dispatchSubscription = this.dispatchService
      .getDispatch(id)
      .subscribe((data) => {
        this.dispatchForm.patchValue(data);
        console.log(data);
      });
  }

  addDispatch() {
    if (this.dispatchForm.valid) {
      this.dispatchIdService.identification += 1;
      this.dispatchForm.patchValue({
        id: this.dispatchIdService.identification,
        init_latitude: 38.767387,
        init_longitude: 9.0047781,
      });

      this.dispatchSubscription = this.vehicleService
        .getVehicle(this.dispatchForm.get("vehicle_id").value)
        .subscribe((data) => {
          console.log(data);
          this.dispatchForm.patchValue({
            plate: data.plate,
          });

          data.odo_value = this.dispatchForm.get("odometer_value").value;

          this.dispatchSubscription = this.dispatchService
            .addDispatch(this.dispatchForm.value)
            .subscribe();

          this.vehicleSubscription = this.vehicleService
            .addVehicle(data)
            .subscribe();
        });
      this.router.navigateByUrl("/dispatch");
    }
  }

  updateDispatch() {
    if (this.dispatchForm.valid) {
      this.vehicleSubscription = this.vehicleService
        .getVehicle(this.dispatchForm.get("vehicle_id").value)
        .subscribe((data) => {
          console.log(data);
          this.dispatchForm.patchValue({
            plate: data.plate,
          });

          this.dispatchSubscription = this.dispatchService
            .updateDispatch(this.dispatchForm.value)
            .subscribe();

          this.router.navigateByUrl("/dispatch");
        });
    }
  }

  selectDestination($event: google.maps.MouseEvent) {
    this.dispatchForm.patchValue({
      end_latitude: $event.latLng.lat(),
      end_longitude: $event.latLng.lng(),
    });
  }
}
