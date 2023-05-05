import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { BaseSpaceService } from './base-space.service';
import { Destination } from '../model/destination.interface';

@Injectable({
  providedIn: 'root',
})
export class CrewService extends BaseSpaceService {
  constructor(private http: HttpClient) {
    super();
  }

  getSpaceData(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.dataUrl + 'crew.data.json').pipe(
      catchError(this.handleError)
    );
  }
}
