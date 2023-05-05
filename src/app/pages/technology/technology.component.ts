import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { Technology } from 'src/app/common/model/technology.interface';
import { TechnologyService } from 'src/app/common/services/technology.service';
import { environment } from 'src/environments/environment';
import { BaseSpaceComponent } from '../base-space.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent extends BaseSpaceComponent{

  constructor(private technologyService: TechnologyService) {
    super(technologyService);
  }

  ngOnInit(): void {
    this.initializeData()
  }

}
