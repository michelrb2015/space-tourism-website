import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Destination } from '../model/destination.interface';
import { BaseSpaceService } from './base-space.service';

@Injectable({
  providedIn: 'root',
})
export class DestinationService extends BaseSpaceService{
  constructor(private http: HttpClient) {
    super();
  }

  getSpaceData(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.dataUrl + 'destination.data.json').pipe(
      catchError(this.handleError)
    );
  }
}
