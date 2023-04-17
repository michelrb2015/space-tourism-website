import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew } from 'src/app/common/model/crew.interface';
import { CrewService } from 'src/app/common/services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  crew: Crew[] = [];
  currentPerson: Crew = {
    name: '',
    images: { png: '', webp: '' },
    role: 'Commander',
    bio: '',
  };

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewService.getCrews().subscribe((crew) => {
      this.crew = [...crew];
      this.currentPerson = { ...crew[0] };
    });
  }

  setCurrentPerson(person: Crew) {
    this.currentPerson = { ...person };
  }
}
