import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { DispatchListComponent } from "./dispatch-list/dispatch-list.component";
import { VehicleRegistrationComponent } from "./vehicle-registration/vehicle-registration.component";
import { LocateComponent } from './locate/locate.component';
import { DispatchRegistrationComponent } from './dispatch-registration/dispatch-registration.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  {
    path: "",
    component: VehicleListComponent,
  },
  {
    path: "dispatch",
    component: DispatchListComponent,
  },
  {
    path: "vehicle",
    component: VehicleListComponent,
  },
  {
    path: "locate",
    component: LocateComponent,
  },
  {
    path: "vehicle-registration",
    component: VehicleRegistrationComponent,
  },
  {
    path: "vehicle/:id/edit",
    component: VehicleRegistrationComponent,
  },
  {
    path: "vehicle/:id",
    component: VehicleDetailComponent,
  },
  {
    path: "dispatch-registration",
    component: DispatchRegistrationComponent,
  },
  {
    path: "dispatch/:id/edit",
    component: DispatchRegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
