import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Destination } from '../model/destination.interface';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(
      '../../../assets/data/destination.data.json'
    );
  }
}
