import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseSpaceService } from './base-space.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrewService extends BaseSpaceService {
  constructor(http: HttpClient) {
    const baseUrl: string = environment.dataUrl + 'crew.data.json';
    super(http, baseUrl);
  }
}
