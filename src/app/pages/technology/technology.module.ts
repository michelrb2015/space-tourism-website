import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { TechnologyRoutingModule } from './technology-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    SharedModule
  ]
})
export class TechnologyModule { }
