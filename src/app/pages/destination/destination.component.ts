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
  destination$!: Observable<Destination>;
  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((params: ParamMap) => params.get('name')))
      .subscribe((name) => {
        this.destination$ = this.destinationService.getCrewByName(name as string);
      });
  }
}
