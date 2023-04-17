import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DestinationComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule
  ]
})
export class DestinationModule { }
