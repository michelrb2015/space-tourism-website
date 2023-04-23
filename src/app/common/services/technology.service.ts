import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Technology } from '../model/technology.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  dataUrl = environment.dataUrl;
  constructor(private http: HttpClient) {}

  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.dataUrl + 'technology.data.json');
  }

  getTechnologyByName(name: string): Observable<Technology> {
    return this.getTechnologies().pipe(
      map((techs) => techs.find((tech) => tech.name == name))
    ) as Observable<Technology>;
  }
}
