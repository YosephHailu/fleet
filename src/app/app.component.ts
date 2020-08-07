import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router) {}
  redirect(payload): void {
    console.log(payload);
    switch (payload.index) {
      case 0:
        this.router.navigate(["/vehicle"]);
        break;

      default:
        break;
    }
  }
  title = "training";
}
