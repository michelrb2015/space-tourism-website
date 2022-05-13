import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationComponent } from './destination.component';

const routes: Routes = [
  {
    path: ':name',
    component: DestinationComponent,
  },
  { path: '', redirectTo: '/destination/moon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
