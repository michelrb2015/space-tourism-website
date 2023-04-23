import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Destination } from '../model/destination.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  dataUrl = environment.dataUrl;
  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(
      this.dataUrl + 'destination.data.json'
    );
  }
}
