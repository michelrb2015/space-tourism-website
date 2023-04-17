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

  getCrewByName(name: string): Observable<Destination> {
    return this.getDestinations().pipe(
      map((destinations) =>
        destinations.find(
          (destination) =>
            destination.name.toLocaleLowerCase() == name.toLocaleLowerCase()
        )
      )
    ) as Observable<Destination>;
  }
}
