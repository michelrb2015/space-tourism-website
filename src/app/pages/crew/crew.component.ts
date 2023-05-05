import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew } from 'src/app/common/model/crew.interface';
import { CrewService } from 'src/app/common/services/crew.service';
import { environment } from 'src/environments/environment';
import { BaseSpaceComponent } from '../base-space.component';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent extends BaseSpaceComponent implements OnInit {
  constructor(private crewService: CrewService) {
    super(crewService);
  }

  ngOnInit(): void {
    this.initializeData()
  }

}
