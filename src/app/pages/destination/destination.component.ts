import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Destination } from 'src/app/common/model/destination.interface';
import { DestinationService } from 'src/app/common/services/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];

  currentDestination: Destination = {
    name: '',
    images: { png: '', webp: '' },
    description: '',
    distance: '',
    travel: ''
  };

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = [...destinations];
      this.currentDestination = { ...destinations[0] };
    });
  }

  setCurrentDestination(destination: Destination) {
    this.currentDestination = { ...destination };
  }
}
