import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundPageComponent } from './background-page/background-page.component';

@NgModule({
  declarations: [
    BackgroundPageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BackgroundPageComponent
  ]
})
export class SharedModule { }
