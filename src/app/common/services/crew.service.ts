import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crew } from '../model/crew.interface';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  dataUrl = environment.dataUrl;
  constructor(private http: HttpClient) {}

  getCrews(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.dataUrl + 'crew.data.json');
  }

  getCrewByName(name: string): Observable<Crew> {
    return this.getCrews().pipe(
      map((crews) => crews.find((crew) => crew.name == name))
    ) as Observable<Crew>;
  }
}
