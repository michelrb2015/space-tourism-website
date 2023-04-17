import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrewComponent } from './crew.component';

const routes: Routes = [
  {
    path: '',
    component: CrewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewRoutingModule {}
