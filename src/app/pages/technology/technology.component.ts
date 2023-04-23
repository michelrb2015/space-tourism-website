import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/common/model/technology.interface';
import { TechnologyService } from 'src/app/common/services/technology.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent{
  technologies: Technology[] = [];
  currentTech: Technology = {
    name: '',
    images: { portrait: '', landscape: '' },
    description: ''
  };
  baseUrl = environment.assetsUrl;

  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.technologyService.getTechnologies().subscribe((techs) => {
      this.technologies = [...techs];
      this.currentTech = { ...techs[0] };
    });
  }

  setCurrentTechnology(tech: Technology) {
    this.currentTech = { ...tech };
  }
}
