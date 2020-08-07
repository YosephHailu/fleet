import { Component, OnInit } from "@angular/core";
import { HttpClientDispatchService } from "../services/http-client-dispatch.service";
import { Subscription } from "rxjs";
import { Dispatch } from "../classes/dispatch";

@Component({
  selector: "app-dispatch-list",
  templateUrl: "./dispatch-list.component.html",
  styleUrls: ["./dispatch-list.component.scss"],
})
export class DispatchListComponent implements OnInit {
  dispatches: Dispatch[];
  dispatchSubscription: Subscription;
  constructor(private dispatchService: HttpClientDispatchService) {}

  ngOnInit() {
    this.getDispatches();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  getDispatches() {
    this.dispatchSubscription = this.dispatchService
      .getDispatches()
      .subscribe((data) => {
        this.dispatches = data;
      });
  }
  
  deleteDispatch(dispatch) {
    if (confirm(`Are you sure you went to delete `)) {
      this.dispatchService.deleteDispatch(dispatch.id).subscribe();
      this.getDispatches();
    }
  }
}
