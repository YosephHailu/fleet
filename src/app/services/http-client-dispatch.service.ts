import { Injectable } from "@angular/core";
import { DispatchService } from "./dispatch.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Dispatch } from "../classes/dispatch";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const cudOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class HttpClientDispatchService extends DispatchService {
  constructor(private http: HttpClient) {
    super();
  }

  getDispatches(): Observable<Dispatch[]> {
    console.log("getting");
    return this.http
      .get<Dispatch[]>(this.dispatchesUrl)
      .pipe(catchError(this.handelError));
  }
  getDispatch(id: number): Observable<Dispatch> {
    const url = `${this.dispatchesUrl}/${id}`;
    return this.http.get<Dispatch>(url).pipe(catchError(this.handelError));
  }
  addDispatch(dispatch: object): Observable<Dispatch> {
    return this.http
      .post<Dispatch>(this.dispatchesUrl, dispatch, cudOptions)
      .pipe(catchError(this.handelError));
  }
  deleteDispatch(dispatch: number | Dispatch): Observable<Dispatch> {
    const id = typeof dispatch === "number" ? dispatch : dispatch.id;
    const url = `${this.dispatchesUrl}/${id}`;
    return this.http.delete<Dispatch>(url).pipe(catchError(this.handelError));
  }
  searchDispatch(term: string): Observable<Dispatch[]> {
    throw new Error("Method not implemented.");
  }
  updateDispatch(dispatch: Dispatch): Observable<Dispatch> {
    return this.http
      .put<Dispatch>(this.dispatchesUrl, dispatch, cudOptions)
      .pipe(catchError(this.handelError));
  }
  handelError(error) {
    console.log(error);
    return throwError(error);
  }
}
