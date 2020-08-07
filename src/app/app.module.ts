import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatGridListModule,
  MatSelectModule,
  MatDividerModule,
} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { DispatchListComponent } from './dispatch-list/dispatch-list.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VehicleDataService } from './services/vehicle-data.service';
import { HttpClientVehicleService } from './services/http-client-vehicle.service';
import { HttpClientDispatchService } from './services/http-client-dispatch.service';
// import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps'

import { LocateComponent } from './locate/locate.component';
import { DispatchRegistrationComponent } from './dispatch-registration/dispatch-registration.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [AppComponent, VehicleListComponent, DispatchListComponent, VehicleRegistrationComponent, LocateComponent, DispatchRegistrationComponent, VehicleDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyABS7KmtcSupizS-uLb__hD0x494eJOLlk'
    // }),
    GoogleMapsModule,

    environment.production ?
    [] : InMemoryWebApiModule.forRoot(VehicleDataService),
    
  ],
  providers: [HttpClientVehicleService, HttpClientDispatchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
