import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseSpaceService } from './base-space.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DestinationService extends BaseSpaceService{
  constructor(http: HttpClient) {
    const baseUrl = environment.dataUrl + 'destination.data.json';
    super(http, baseUrl);
  }
}
