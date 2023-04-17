import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew.component';
import { CrewRoutingModule } from './crew-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CrewComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule,
    SharedModule
  ]
})
export class CrewModule { }
