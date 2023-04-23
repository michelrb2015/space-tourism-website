import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Technology } from '../model/technology.interface';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  constructor(private http: HttpClient) {}

  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>('../../../assets/data/technology.data.json');
  }

  getTechnologyByName(name: string): Observable<Technology> {
    return this.getTechnologies().pipe(
      map((techs) => techs.find((tech) => tech.name == name))
    ) as Observable<Technology>;
  }
}
