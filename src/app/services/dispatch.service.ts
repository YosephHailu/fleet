import { Injectable } from '@angular/core';
import { Dispatch } from '../classes/dispatch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class DispatchService {
  identification = 100;
  dispatchesUrl = 'api/dispatches';

  abstract getDispatches(): Observable<Dispatch[]>;
  abstract getDispatch(id: number): Observable<Dispatch>;
  abstract addDispatch(dispatch: object): Observable<Dispatch>;
  abstract deleteDispatch(dispatch: Dispatch | number): Observable<Dispatch>;
  abstract searchDispatch(term: string): Observable<Dispatch[]>;
  abstract updateDispatch(dispatch: Dispatch): Observable<Dispatch>;
}
