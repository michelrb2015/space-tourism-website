import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/common/services/technology.service';
import { BaseSpaceComponent } from '../base-space.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyComponent extends BaseSpaceComponent{
  constructor(private technologyService: TechnologyService) {
    super(technologyService);
  }
}
