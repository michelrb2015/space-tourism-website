import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Technology } from '../model/technology.interface';
import { BaseSpaceService } from './base-space.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService extends BaseSpaceService {
  constructor(private http: HttpClient) {
    super();
  }

  getSpaceData(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.dataUrl + 'technology.data.json').pipe(
      catchError(this.handleError)
    );
  }

}
