import { Component } from '@angular/core';
import { CrewService } from 'src/app/common/services/crew.service';
import { BaseSpaceComponent } from '../base-space.component';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent extends BaseSpaceComponent {
  constructor(private crewService: CrewService) {
    super(crewService);
  }

}
