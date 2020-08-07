import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClientVehicleService } from "../services/http-client-vehicle.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { Vehicle } from "../classes/vehicle";
import { VehicleService } from "../services/vehicle.service";

@Component({
  selector: "app-vehicle-registration",
  templateUrl: "./vehicle-registration.component.html",
  styleUrls: ["./vehicle-registration.component.scss"],
})
export class VehicleRegistrationComponent implements OnDestroy {
  edit: boolean = false;
  vehicle: Vehicle;
  vehicleForm = new FormGroup({
    id: new FormControl(""),
    plate: new FormControl(""),
    type: new FormControl("car"),
    name: new FormControl(""),
    manufacturer: new FormControl(""),
    model: new FormControl(""),
    fuel_type: new FormControl("gasoline"),
    fuel_capacity: new FormControl(),
    note: new FormControl("note"),
    latitude: new FormControl("latitude"),
    longitude: new FormControl("longitude"),
    init_odo_value: new FormControl(),
    fuel_consumption: new FormControl(),

  });

  vehiclesSubscription: Subscription;
  routeSubscription: Subscription;
  vehicleSubscription: Subscription;
  constructor(
    private vehicleService: HttpClientVehicleService,
    private router: Router,
    private route: ActivatedRoute,
    private vehicleIdService: VehicleService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.edit = true;
        this.getVehicle(params.id);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.vehiclesSubscription) this.vehiclesSubscription.unsubscribe();
    if (this.routeSubscription) this.routeSubscription.unsubscribe();
    if (this.vehicleSubscription) this.vehicleSubscription.unsubscribe();
  }

  getVehicle(id) {
    this.vehicleSubscription = this.vehicleService
      .getVehicle(id)
      .subscribe((data) => {
        this.vehicleForm.setValue(data);
        this.vehicle = data;
      });
  }

  addVehicle() {
    if (this.vehicleForm.valid) {
      this.vehicleIdService.identification += 1;
      this.vehicleForm.patchValue({
        id: this.vehicleIdService.identification,
        latitude: 9.0047781,
        longitude: 38.767387,
        odo_value: this.vehicleForm.get('init_odo_value').value
      });
      this.vehiclesSubscription = this.vehicleService
        .addVehicle(this.vehicleForm.value)
        .subscribe();

      this.router.navigateByUrl("/vehicle");
    }
  }

  updateVehicle() {
    if (this.vehicleForm.valid) {
      this.vehiclesSubscription = this.vehicleService
        .updateVehicle(this.vehicleForm.value)
        .subscribe();

      this.router.navigateByUrl("/vehicle");
    }
  }
}
