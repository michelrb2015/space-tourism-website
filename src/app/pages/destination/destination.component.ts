import { Component } from '@angular/core';
import { BaseSpaceComponent } from '../base-space.component';
import { DestinationService } from 'src/app/common/services/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent extends BaseSpaceComponent{

  constructor(private destinationService: DestinationService) {
    super(destinationService);
  }

  ngOnInit(): void {
    this.initializeData()
  }

}
